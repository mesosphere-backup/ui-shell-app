import { injectable, inject, named } from "inversify";
import { IExtensionProvider, ExtensionProvider } from "@extension-kid/core";
import { BehaviorSubject } from "rxjs";

const NAVIGATION_CHANGE = Symbol("NAVIGATION_CHANGE");

interface INavigationElement {
  children?: INavigationElement[];
  parent?: string;
  path?: string;
  name?: string;
  extension?: any;
}

export const NavigationServiceExtension = Symbol("NavigationServiceExtension");

export interface INavigationExtension {
  getElements(): INavigationElement[];
}

function unflatten(
  array: INavigationElement[],
  parent: INavigationElement = {}
) {
  const children = array.filter(
    (child: INavigationElement) => child.parent === parent.path
  );

  if (children.length !== 0) {
    if (parent.path) {
      parent.children = children;
    }

    children.forEach((child: INavigationElement) => unflatten(array, child));
  }

  return children;
}
function dedupe(elements) {
  return elements.reduce((acc, el) => {
    if (acc.find(({ path }) => path === el.path)) {
      if (el.duplicable) {
        return acc;
      }
      console.warn("removed duplicate navigation item; you might want to TODO");
      return acc.concat([el]);
    } else {
      return acc.concat([el]);
    }
  }, []);
}

@injectable()
export default class NavigationService {
  private extensionProvider: IExtensionProvider<INavigationExtension>;
  private definition$: any;

  constructor(
    @inject(ExtensionProvider)
    @named(NavigationServiceExtension)
    extensionProvider: IExtensionProvider<INavigationExtension>
  ) {
    this.extensionProvider = extensionProvider;
    this.definition$ = new BehaviorSubject(this.getDefinition());
    this.extensionProvider.subscribe({
      next: () => {
        console.log("next");
        this.definition$.next(this.getDefinition());
      }
    });
  }

  public getDefinition$() {
    return this.definition$;
  }

  public getDefinition() {
    const elements = this.extensionProvider
      .getAllExtensions()
      .reduce(
        (acc: INavigationElement[], extension: INavigationExtension) =>
          acc.concat(
            extension
              .getElements()
              .map(e => ({ ...e, extension: extension.id }))
          ),
        []
      );

    return dedupe(unflatten(elements));
  }

  static get NAVIGATION_CHANGE() {
    return NAVIGATION_CHANGE;
  }
}
