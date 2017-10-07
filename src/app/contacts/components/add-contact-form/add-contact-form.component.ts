class AddContactFormController {
    name: string;
    contactAdded: ($event: { $event: { contact: { name: string }}}) => void;

    submit() {
        const name = this.name;
        this.contactAdded({
            $event: {
                contact: { name }
            }
        });
        this.name = '';
    }
}

export class AddContactForm implements angular.IComponentOptions {
    static selector = 'addContactForm';

    static template = require('./add-contact-form.component.html');
    static bindings = {
        contactAdded: '&'
    };
    static controller = AddContactFormController;
}
