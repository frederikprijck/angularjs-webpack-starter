/**
 * Import the polyfills and vendor files
 */
import './polyfills';
import './vendor';

/**
 * Import the global styles
 */
import './index.scss';

/**
 * Temporary Import angular
 * see: https://github.com/Microsoft/TypeScript/issues/10178
 */
import * as angular from 'angular';

/**
 *  Import module to be bootstrapped
 */
import { moduleName as appModule } from './app/app.module';

/**
 * Bootstrap the application using the imported moduleName
 */
const bootstrapModuleName = angular.module('application.bootstrap', [
  appModule
]).name;
