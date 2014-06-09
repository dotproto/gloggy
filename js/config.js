gloggy.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '/partial/home.html'
    })
    .when('/about', {
      templateUrl: '/partial/about.html'
      // controller: 'IssueController'
    })
    .when('/:post', {
      templateUrl: '/partial/post.html',
      controller: 'PostController'
    })
    .when('/404', {
      templateUrl: '/partial/404.html'
    })
    .otherwise({
      redirectTo: '404'
    })
});
