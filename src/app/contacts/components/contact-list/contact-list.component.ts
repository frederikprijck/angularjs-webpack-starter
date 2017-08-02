// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

class ContactListController {
    contacts: { name: string }[];
    contactRemoved: ($event: { $event: { contact: { name: string }}}) => void;

    remove(contact: { name: string }) {
        this.contactRemoved({
            $event: {
                contact
            }
        });
    }
}

export class ContactList implements angular.IComponentOptions {
    template: string;
    bindings: any;
    controller: any;

    constructor() {
        this.bindings = {
            contacts: '<',
            contactRemoved: '&'
        };
        this.controller = ContactListController;
        this.template = `
        <div ng-repeat="contact in $ctrl.contacts">
            <span>{{ contact.name }}</span>
            <a href="" ng-click="$ctrl.remove(contact)">
                Remove
            </a>
        </div>
        `;
    }
}
