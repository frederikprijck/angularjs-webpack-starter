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
        this.template = require('./add-contact-form.component.html');
    }
}
