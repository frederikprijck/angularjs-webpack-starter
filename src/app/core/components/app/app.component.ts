// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import the Component styles
 */
import './app.component.scss';

export class App implements angular.IComponentOptions {
    template: string;

    constructor() {
        this.template = '<div class="app" ui-view></div>';
    }
}
