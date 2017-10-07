import * as angular from 'angular';
import 'angular-mocks';
import { AddContactForm } from './add-contact-form.component';

describe('AddContactForm component', () => {
    beforeEach(() => {
        angular
            .module('app', [])
            .component(AddContactForm.selector, AddContactForm);
        angular.mock.module('app');
    });

    it('should exist', angular.mock.inject(($componentController: any) => {
        const component = $componentController(AddContactForm.selector, {}, {});

        expect(component).toBeDefined();
    }));

    it('should call `contactAdded` binding when submitting', angular.mock.inject(($componentController: any) => {
        const bindings = {
            contactAdded: jasmine.createSpy('contactAdded')
        };
        const component = $componentController(AddContactForm.selector, {}, bindings);
        component.submit();

        expect(bindings.contactAdded).toHaveBeenCalled();
    }));

    it('should pass `contact` to `contactAdded` binding when submitting', angular.mock.inject(($componentController: any) => {
        const bindings = {
            contactAdded: jasmine.createSpy('contactAdded')
        };
        const component = $componentController(AddContactForm.selector, {}, bindings);
        component.name = 'John';
        component.submit();

        expect(bindings.contactAdded).toHaveBeenCalledWith({ $event: { contact: { name: 'John' }}});
    }));

    it('should clear `name` when submitting', angular.mock.inject(($componentController: any) => {
        const bindings = {
            contactAdded: jasmine.createSpy('contactAdded')
        };
        const component = $componentController(AddContactForm.selector, {}, bindings);
        component.name = 'John';
        component.submit();

        expect(component.name).toBe('');
    }));
});
