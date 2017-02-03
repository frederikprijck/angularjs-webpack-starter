// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

export class AddContactForm implements angular.IComponentOptions {
    template: string;
    bindings: any;

    constructor() {
        this.bindings = {
            contactAdded: '&'
        };
        this.template = `
        <form name="add-contact-form" ng-submit="$ctrl.submit()" novalidate>
        
        </form>
        `;
    }
}
