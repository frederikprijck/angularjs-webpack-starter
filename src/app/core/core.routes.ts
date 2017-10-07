import { App } from './components/app/app.component';

export const routing = ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
  'ngInject';
  $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      component: App.selector
    });

    $urlRouterProvider.otherwise('/app/contact');
};
