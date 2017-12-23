import * as angular from 'angular';
import 'angular-mocks';
import { ContactsService } from './contacts.service';

describe('Contacts container', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .service('contactsService', ContactsService);
    angular.mock.module('app');
  });

  it('should exist', angular.mock.inject((contactsService: ContactsService) => {
    expect(contactsService).toBeDefined();
  }));

  it('should generate an id when adding a new contact', angular.mock.inject((contactsService: ContactsService) => {
    const contact = {
      firstName: 'John',
      lastName: 'Doe'
    };

    contactsService.add(contact);

    expect(contactsService.contacts[1].id).toBe(2);
  }));

  it('should remove a contact by id', angular.mock.inject((contactsService: ContactsService) => {
    contactsService.remove(1);
    expect(contactsService.contacts.length).toBe(0);
  }));
});
