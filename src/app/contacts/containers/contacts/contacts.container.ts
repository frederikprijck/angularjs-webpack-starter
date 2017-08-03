import { ContactsService } from './../../services/contacts.service';

class ContactsController {
    contacts: { name: string }[];

    constructor(
        private contactsService: ContactsService
    ) {
        'ngInject';
     }

    $onInit() {
        this.fetchData();
    }

    remove(contact: any) {
        this.contactsService.remove(contact.name);
        this.fetchData();
    }

    private fetchData() {
        this.contactsService.getAll()
            .then(contacts => {
                this.contacts = contacts;
            });
    }
}

export class ContactsContainer implements angular.IComponentOptions {
    template: string;
    controller: any;

    constructor() {
        this.controller = ContactsController;
        this.template = `
            <div>
                <contact-list contacts="$ctrl.contacts" contact-removed="$ctrl.remove($event.contact)"></contact-list>
                <a class="btn btn-primary" ui-sref="add-contact">Add</a>
            </div>
        `;
    }
}
