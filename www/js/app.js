// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Sparkle', ['ionic','Sparkle.controllers','Sparkle.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',function($stateProvider,$urlRouterProvider,$sceDelegateProvider){

    
    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);

  $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'templates/home.html',
      controller:"HomeController"
    })
    .state('event',{
      url:'/event/:eventID',
      templateUrl:'templates/event.html',
      controller:'EventController'
    })
    
    
      /*.state('find',{
      url:'/find',
      templateUrl:'templates/findOption.html',
      controller:'FindOptionController'
    })
    .state('internshiplist',{
      url:'/internshiplist',
      templateUrl:'templates/internshiplist.html',
      controller:'InternshiplistController'
    })
*/
    $urlRouterProvider.otherwise("/home");
}])


