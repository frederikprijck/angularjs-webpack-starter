export class ContactsService {
  static selector = 'contactsService';
  contacts: { id: number, lastName: string, firstName: string }[] = [
    { id: 1, firstName: 'John', lastName: 'Doe' }
  ];

  constructor(
      private $q: angular.IQService
  ) {
    'ngInject';
  }

  getAll() {
    return this.$q.resolve(this.contacts);
  }

  add(contact: { lastName: string, firstName: string }) {
    const highestId = this.contacts
      .map(c => c.id)
      .reduce((a, b) => Math.max(a, b), 1);

    this.contacts.push({
      id: highestId + 1,
      firstName: contact.firstName,
      lastName: contact.lastName
    });
  }

  remove(id: number) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}
