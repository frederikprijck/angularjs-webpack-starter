// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import { App } from './components/app/app.component';
import { Root } from './components/root/root.component';

/**
 * Import Module Configuration
 */
import { configuration } from './core.configuration';
import { routing } from './core.routes';

export const moduleName =
  angular.module('application.core', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */
  .component(App.selector, App)
  .component(Root.selector, Root)

  /**
   * Register Module Configuration
   */
  .config(configuration)
  .config(routing)
  .name;
