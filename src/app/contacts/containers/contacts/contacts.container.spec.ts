import * as angular from 'angular';
import 'angular-mocks';
import { ContactsContainer } from './contacts.container';

describe('Contacts container', () => {
    let _contactsService = {
        remove: jasmine.createSpy('remove'),
        getAll: jasmine.createSpy('getAll')
    };

    let _$state = {
        go: jasmine.createSpy('go')
    };

    beforeEach(() => {
        angular
            .module('app', [])
            .component(ContactsContainer.selector, ContactsContainer)
            .value('contactsService', _contactsService);
        angular.mock.module('app');
    });

    it('should exist', angular.mock.inject(($componentController: any) => {
        const component = $componentController(ContactsContainer.selector, {}, {});

        expect(component).toBeDefined();
    }));

    it('should call `contactsService.remove` when removing', angular.mock.inject((
        $componentController: any, 
        contactsService: any, 
        $q: angular.IQService) => {
        const component = $componentController(ContactsContainer.selector, {}, {});
        _contactsService.getAll.and.returnValue($q.resolve());
        component.remove({
            name: 'John'
        });

        expect(contactsService.remove).toHaveBeenCalledWith('John');
    }));

    it('should call `contactsService.getAll` on init', angular.mock.inject((
        $componentController: any, 
        contactsService: any, 
        $q: angular.IQService) => {
        const component = $componentController(ContactsContainer.selector, {}, {});
        _contactsService.getAll.and.returnValue($q.resolve());
        component.$onInit();

        expect(contactsService.getAll).toHaveBeenCalled();
    }));
});
