export class ContactsService {

    contacts: { name: string }[] = [
        { name: 'John' }
    ];

    constructor(
        private $q: angular.IQService
    ) {
        'ngInject';
    }

    getAll() {
        return this.$q.resolve(this.contacts);
    }

    add(contact: { name: string }) {
        this.contacts.push(contact);
    }

    remove(contactName: string) {
        this.contacts = this.contacts.filter(contact => contact.name !== contactName);
    }
}
