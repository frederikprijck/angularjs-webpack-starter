import { ContactsService } from './../../services/contacts.service';

class AddContactController {

    constructor(
        private contactsService: ContactsService,
        private $state: angular.ui.IStateService
    ) {
        'ngInject';
    }

    add(contact: { name: string })  {
        this.contactsService.add(contact);
        this.$state.go('contacts');
    }
}

export class AddContactContainer implements angular.IComponentOptions {
    static selector = 'addContact';
    static controller = AddContactController;
    static template = `
    <div>
      <add-contact-form contact-added="$ctrl.add($event.contact)"></add-contact-form>
      <a class="btn btn-default" ui-sref="contacts">Back</a>
    </div>
    `;
}
