import * as angular from 'angular';
import 'angular-mocks';
import { ContactList } from './contact-list.component';

describe('ContactList component', () => {
    beforeEach(() => {
        angular
            .module('app', [])
            .component(ContactList.selector, ContactList);
        angular.mock.module('app');
    });

    it('should exist', angular.mock.inject(($componentController: any) => {
        const component = $componentController(ContactList.selector, {}, {});

        expect(component).toBeDefined();
    }));

    it('should pass `contact` to `contactRemoved` binding when removing', angular.mock.inject(($componentController: any) => {
        const bindings = {
            contactRemoved: jasmine.createSpy('contactRemoved')
        };
        const component = $componentController(ContactList.selector, {}, bindings);
        component.remove({
            name: 'John'
        });

        expect(bindings.contactRemoved).toHaveBeenCalledWith({ $event: { contact: { name: 'John' }}});
    }));
});
