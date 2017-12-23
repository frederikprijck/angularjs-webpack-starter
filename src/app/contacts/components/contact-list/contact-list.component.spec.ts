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
    component.remove({ id: 1 });

    expect(bindings.contactRemoved).toHaveBeenCalledWith({ $event: { id: 1 }});
  }));
});
