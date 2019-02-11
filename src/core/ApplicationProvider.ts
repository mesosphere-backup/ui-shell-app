import { injectable, inject, named } from "inversify";
import { ExtensionProvider } from "@extension-kid/core";

export const ApplicationExtension = Symbol("ApplicationExtension");
export interface IApplicationExtension {
  onStart(service: ApplicationProvider): void;
}

@injectable()
export default class ApplicationProvider {
  private extensionsProvider: ExtensionProvider<IApplicationExtension>;

  constructor(
    @inject(ExtensionProvider)
    @named(ApplicationExtension)
    extensionsProvider: ExtensionProvider<IApplicationExtension>
  ) {
    this.extensionsProvider = extensionsProvider;
  }

  public start(): void {
    this.extensionsProvider.subscribe({ complete: this.initExtensions });
    this.initExtensions();
  }

  private initExtensions = (): void => {
    for (const extension of this.extensionsProvider.getAllExtensions()) {
      if (extension.onStart) {
        extension.onStart(this);
      }
    }
  };
}
