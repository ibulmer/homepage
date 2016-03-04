angular.module('routerRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
    templateUrl : '/app/views/pages/home.html',
    controller: 'homeController',
    controllerAs : 'home'
  })

  .when('/about', {
    templateUrl : '/app/views/pages/about.html',
    controller: 'aboutController',
    controllerAs : 'about'
  })

  .when('/projects', {
    templateUrl : '/app/views/pages/projects.html',
    controller: 'projectsController',
    controllerAs : 'projects'
  })

  .when('/contact', {
    templateUrl: '/app/views/pages/contact.html',
    controller: 'contactController',
    controllerAs: 'contact'
  })

  $locationProvider.html5Mode(true);
})