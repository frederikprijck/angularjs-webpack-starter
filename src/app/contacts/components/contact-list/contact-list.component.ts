/**
 * Import the Component styles
 */
import './contact-list.component.scss';

class ContactListController {
    contacts: { name: string }[];
    contactRemoved: ($event: { $event: { contact: { name: string }}}) => void;

    remove(contact: { name: string }) {
        this.contactRemoved({
            $event: {
                contact
            }
        });
    }
}

export class ContactList implements angular.IComponentOptions {
    static selector = 'contactList';
    static bindings = {
        contacts: '<',
        contactRemoved: '&'
    };
    static controller = ContactListController;
    static template = `
    <div class="contact-list" ng-repeat="contact in $ctrl.contacts">
        <span>{{ contact.name }}</span>
        <a href="" ng-click="$ctrl.remove(contact)">
            <i class="pull-right glyphicon glyphicon-remove"></i>
        </a>
    </div>
    `;
}
