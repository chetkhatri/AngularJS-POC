var cdatApp = angular.module('nazara',['ui.bootstrap']);
cdatApp.controller('rewardController', [ '$scope', '$http', '$rootScope','$modal',
		function($scope, $http, $rootScope,$modal) {
      $rootScope.ctxurl="http://52.65.62.87/api/v1/";
	    $scope.app_secret = "5673ff234a886f0d75676ba2";
      $scope.access_token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NjczZmZlODc1YzQ1MTQ2NzUyYWZiYjgiLCJkZXZpY2VJZCI6IjEyMzQ1NiIsImFwcElkIjoiNTY3M2ZmMjM0YTg4NmYwZDc1Njc2YmExIiwiaWF0IjoxNDUwNDQyNzI4LCJleHAiOjE0NTA0NDYzMjh9.WAVxUqiwx6qK8vJkegdqO_xrT42Lkk0Qcw50ErnYQvs";
      $scope.rewardData=null;



      $scope.getRewards=function()
      {
        
					data={student:[{"id":123,
					    "name":"abc",
					    "std":9
					  },
					  {
					    "id":456,
					    "name":"xyz",
					    "std":10
					  }
					  ]

					};
					$scope.rewardData = data;
        
      }

/* Template type modal start */

              $scope.openTemplateModal = function() {
                var $modalInstance = $modal.open({
                  templateUrl : 'filePreviewAlert.html',
                  controller : filePreviewCtrl,

                });

              };

              var filePreviewCtrl = function($scope,
                  $modalInstance, $rootScope) {

                 // Binding value to Modal Component
                $scope.tempModel = 'Hi Andrew !';

                $scope.ok = function() {
                  $modalInstance.close();
                }

              };

              /* Template type modal end */

$scope.justClick = function()
{
	console.info('Clicked !');
}

            $scope.getRewards();
    
}
  ]);
