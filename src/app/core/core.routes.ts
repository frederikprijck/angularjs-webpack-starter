export const routing = ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
    $stateProvider
      .state('app', {
        abstract: true,
        url: '/app',
        component: 'app'
      });

      $urlRouterProvider.otherwise('/app/contact');
};
