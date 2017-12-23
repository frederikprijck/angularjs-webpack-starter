class AddContactFormController {
  lastName: string;
  firstName: string;
  contactAdded: ($event: { $event: { contact: { lastName: string, firstName: string }}}) => void;

  submit() {
    const lastName = this.lastName;
    const firstName = this.firstName;
    this.contactAdded({
      $event: {
        contact: { lastName, firstName }
      }
    });
    this.lastName = '';
    this.firstName = '';
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
