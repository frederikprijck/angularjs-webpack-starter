// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';
import { ContactsService } from './../../services/contacts.service';

class AddContactController {

    constructor(
        private contactsService: ContactsService
    ) { }

    add(contact: { name: string })  {
        this.contactsService.add(contact);
    }
}

export class AddContactContainer implements angular.IComponentOptions {
    template: string;
    controller: any;

    constructor() {
        this.controller = AddContactController;
        this.template = `
        <div>
          <add-contact-form contact-added="$ctrl.add($event.contact)"></add-contact-form>
          <a ui-sref="contacts">Back</a>
        </div>
        `;
    }
}
