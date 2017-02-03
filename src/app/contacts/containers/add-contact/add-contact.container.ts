// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

class AddContactController {
    contact: { name?: string };

    $onInit() {
        this.contact = {};
    }
}

export class AddContactContainer implements angular.IComponentOptions {
    template: string;
    controller: any;

    constructor() {
        this.controller = AddContactController;
        this.template = `
        <div>
          <add-contact-form contact-added="$ctrl.add(contact)"></add-contact-form>
        </div>
        `;
    }
}
