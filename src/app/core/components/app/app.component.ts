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
