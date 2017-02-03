export const routing = ($stateProvider: angular.ui.IStateProvider) => {

    $stateProvider

      .state('add-contact', {
        parent: 'app',
        url: '/contact/add',
        template: '<add-contact></add-contact>'
      })

      .state('contacts', {
        parent: 'app',
        url: '/contact',
        template: '<contacts></contacts>'
      });
};
