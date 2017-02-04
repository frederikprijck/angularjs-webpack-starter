export class ContactsService {

    contacts: { name: string }[] = [
        { name: 'John' }
    ];

    constructor(
        private $q: angular.IQService
    ) {

    }

    getAll() {
        return this.$q.resolve(this.contacts);
    }

    add(contact: { name: string }) {
        this.contacts.push(contact);
    }
}
