/**
 * Import the Component styles
 */
import './app.component.scss';

export class App implements angular.IComponentOptions {
    static selector = 'app';
    static template = '<div class="app" ui-view></div>';
}
