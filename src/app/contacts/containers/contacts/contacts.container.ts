import { ContactsService } from './../../services/contacts.service';

/**
 * Import the Component styles
 */
import './contacts.container.scss';

class ContactsController {
  contacts: { id: number, firstName: string, lastName: string }[];

  constructor(
      private contactsService: ContactsService
  ) {
      'ngInject';
    }

  $onInit() {
    this.fetchData();
  }

  remove(id: number) {
    this.contactsService.remove(id);
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
  static selector = 'contacts';
  static controller = ContactsController;
  static template = `
  <div class="row">
    <div class="col-md-12">
      <h1>Contacts</h1>
      <contact-list contacts="$ctrl.contacts" contact-removed="$ctrl.remove($event.id)"></contact-list>
      <a class="btn btn-primary btn-block" ui-sref="add-contact">Add</a>
    </div>
  </div>
  `;
}
