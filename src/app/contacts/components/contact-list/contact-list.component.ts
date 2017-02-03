// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

export class ContactList implements angular.IComponentOptions {
    template: string;
    bindings: any;

    constructor() {
        this.bindings = {
            contacts: '<'
        };
        this.template = `
        <div ng-repeat="contact in $ctrl.contacts">
            <span>{{ contact.name }}</span>
        </div>
        `;
    }
}
