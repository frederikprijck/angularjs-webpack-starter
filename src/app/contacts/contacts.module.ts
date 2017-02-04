// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Components
 */
import { AddContactForm } from './components/add-contact-form/add-contact-form.component';
import { ContactList } from './components/contact-list/contact-list.component';

/**
 * Containers
 */
import { ContactsContainer } from './containers/contacts/contacts.container';
import { AddContactContainer } from './containers/add-contact/add-contact.container';

/**
 * Services
 */
import { ContactsService } from './services/contacts.service';

/**
 * Routing
 */
import { routing } from './contacts.routes';

export const moduleName =
    angular.module('application.contacts', [
        'ui.router'
    ])

    /**
     * Components
     */
    .component('addContactForm', new AddContactForm())
    .component('contactList', new ContactList())

    /**
     * Containers
     */
    .component('contacts', new ContactsContainer())
    .component('addContact', new AddContactContainer())

    /**
     * Services
     */
    .service('contactsService', ContactsService)

    /**
     * Configuration
     */
    .config(routing)
    .name;
