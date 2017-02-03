// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

export class App implements angular.IComponentOptions {
    template: string;

    constructor() {
        this.template = '<div ui-view></div>';
    }
}
