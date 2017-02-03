// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

class ContactsController {
    contacts: { name: string }[];

    $onInit() {
        this.contacts = [
            { name: 'Frederik' },
            { name: 'John'}
        ];
    }
}

export class ContactsContainer implements angular.IComponentOptions {
    template: string;
    controller: any;

    constructor() {
        this.controller = ContactsController;
        this.template = `
        <div>
          <contact-list contacts="$ctrl.contacts"></contact-list>
        </div>
        `;
    }
}
