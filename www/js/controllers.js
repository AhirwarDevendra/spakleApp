angular.module('Sparkle.controllers', [])

.controller('NavCtrl', ['$scope','$ionicSideMenuDelegate',function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
  $scope.exitapp = function () {  
    //document.addEventListener("backbutton",onBackKeyDown,false);
    //function onBackKeyDown(){
      //alert('fsd');
      //ionic.Platform.exitApp();
        navigator.notification.confirm(
          'Exit Internkatta ?'
        , function(button) {
              if (button == 2) {
                  navigator.app.exitApp();
              } 
          }
        , 'Exit'
        , 'No,Yes'
        );  
      //}
  };
}])

.controller('HomeController',['$scope','$location', '$anchorScroll','$timeout','Events' ,function($scope,$location, $anchorScroll,$timeout,Events){
    
    console.log("In Home");
    $scope.events = Events.all();
    $scope.remove = function(event) {
    Events.remove(event);
  };
}])

.controller('EventController',['$scope','$location', '$anchorScroll','$timeout','$ionicModal','$ionicPlatform','$ionicHistory','$http','Videos','Images',function($scope,$location, $anchorScroll,$timeout,$ionicModal,$ionicPlatform,$ionicHistory,$http,Videos,Images){
    
    $http.get("php/xyz.php")
    .success(function (response) 
    {
      //alert(response);
        console.log("set");
         
      }
    
             );
    
    $scope.videos = Videos.all();
    console.log($scope.videos);
    $scope.images = Images.all();
    
    
    $scope.showImages = function(id)
    {
        //console.log(Images.get(src).src);
        $scope.OpenImage = Images.get(id).src;
        $scope.showModal('templates/image-popover.html');
    }
    
    $scope.showModal = function(templateUrl) {
		$ionicModal.fromTemplateUrl(templateUrl, {
			scope: $scope,
			animation: 'slide-in-up',
            hardwareBackButtonClose: true
		}).then(function(modal) {
			$scope.modal = modal;
			$scope.modal.show();
		});
	}
 
	// Close the modal
	$scope.closeModal = function() {
		$scope.modal.hide();
		$scope.modal.remove()
	};
    
    

    
    $scope.showVideo = function() {
    $scope.clipSrc = "https://www.youtube.com/v/=nv3hc3tlxfo";
        
	$scope.showModal('templates/video-popover.html');
}
    
    
    
    
  
}])