// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import { AddContactForm } from './components/add-contact-form/add-contact-form.component';
import { ContactList } from './components/contact-list/contact-list.component';

/**
 * Import Module Containers
 */
import { ContactsContainer } from './containers/contacts/contacts.container';
import { AddContactContainer } from './containers/add-contact/add-contact.container';

/**
 * Import Module Services
 */
import { ContactsService } from './services/contacts.service';

/**
 * Import Module Routing
 */
import { routing } from './contacts.routes';

export const moduleName =
  angular.module('application.contacts', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */
  .component(AddContactForm.selector, AddContactForm)
  .component(ContactList.selector, ContactList)

  /**
   * Register Module Containers
   */
  .component(ContactsContainer.selector, ContactsContainer)
  .component(AddContactContainer.selector, AddContactContainer)

  /**
   * Register Module Services
   */
  .service(ContactsService.selector, ContactsService)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
