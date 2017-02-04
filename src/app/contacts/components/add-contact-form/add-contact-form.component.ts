// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

class AddContactFormController {
    name: string;
    contactAdded: ($event: { $event: { contact: { name: string }}}) => void;

    submit() {
        const name = this.name;
        this.contactAdded({
            $event: {
                contact: { name }
            }
        });
        this.name = '';
    }
}

export class AddContactForm implements angular.IComponentOptions {
    template: string;
    bindings: any;
    controller: any;

    constructor() {
        this.controller = AddContactFormController;
        this.bindings = {
            contactAdded: '&'
        };
        this.template = `
        <form name="addContactForm" ng-submit="$ctrl.submit()" novalidate>
            <input type="text" ng-model="$ctrl.name" placeholder="name" required>
            <button type="submit" ng-disabled="addContactForm.$invalid">Add</button>
        </form>
        `;
    }
}
