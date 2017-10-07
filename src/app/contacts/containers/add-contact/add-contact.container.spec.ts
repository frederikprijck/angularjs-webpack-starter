import * as angular from 'angular';
import 'angular-mocks';
import { AddContactContainer } from './add-contact.container';

describe('AddContact container', () => {
    let contactsService = {
        add: jasmine.createSpy('add')
    };

    let $state = {
        go: jasmine.createSpy('go')
    };

    beforeEach(() => {
        angular
            .module('app', [])
            .component(AddContactContainer.selector, AddContactContainer)
            .value('contactsService', contactsService)
            .value('$state', $state);
        angular.mock.module('app');
    });

    it('should exist', angular.mock.inject(($componentController: any) => {
        const component = $componentController(AddContactContainer.selector, {}, {});

        expect(component).toBeDefined();
    }));

    it('should call `contactsService.add` when adding', angular.mock.inject(($componentController: any, contactsService: any) => {
        const component = $componentController(AddContactContainer.selector, {}, {});
        component.add({
            name: 'John'
        });

        expect(contactsService.add).toHaveBeenCalledWith({ name: 'John' });
    }));

    it('should call `$state.go` when adding', angular.mock.inject(($componentController: any, contactsService: any) => {
        const component = $componentController(AddContactContainer.selector, {}, {});
        component.add({
            name: 'John'
        });

        expect($state.go).toHaveBeenCalledWith('contacts');
    }));
});
