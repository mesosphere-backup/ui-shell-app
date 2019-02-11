import { injectable, inject, named } from "inversify";
import { EventEmitter } from "events";
import { IExtensionProvider, ExtensionProvider } from "@extension-kid/core";

const NAVIGATION_CHANGE = Symbol("NAVIGATION_CHANGE");

interface INavigationElement {
  children?: INavigationElement[];
  parent?: string;
  path?: string;
  name?: string;
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

@injectable()
export default class NavigationService {
  private extensionProvider: IExtensionProvider<INavigationExtension>;
  private eventEmmiter: EventEmitter;
  private definition: INavigationElement[];

  constructor(
    @inject(ExtensionProvider)
    @named(NavigationServiceExtension)
    extensionProvider: IExtensionProvider<INavigationExtension>
  ) {
    this.extensionProvider = extensionProvider;

    this.eventEmmiter = new EventEmitter();
    this.definition = [];

    this.extensionProvider.subscribe({
      complete() {
        this.definition = [];
        this.eventEmmiter.emit(NAVIGATION_CHANGE);
      }
    });
  }

  public on(type: symbol, callback: () => void) {
    this.eventEmmiter.on(type, callback);
  }

  public getDefinition() {
    if (this.definition.length > 0) {
      return this.definition;
    }

    const elements = this.extensionProvider
      .getAllExtensions()
      .reduce(
        (acc: INavigationElement[], extension: INavigationExtension) =>
          acc.concat(extension.getElements()),
        []
      );

    this.definition = unflatten(elements);

    return this.definition;
  }

  static get NAVIGATION_CHANGE() {
    return NAVIGATION_CHANGE;
  }
}
