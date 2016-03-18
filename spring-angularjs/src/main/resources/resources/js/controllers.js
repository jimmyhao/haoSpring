'use strict';

/* Controllers */
angular.module('myApp.controllers', [])
  .controller('IndexCtrl', ['$scope', function($scope) {
        /* initiate scope object, {{now}} */
      $scope.now = new Date();
  }])
  .controller('Page1Ctrl', ['$scope', '$http', function($scope, $http) {
      $http.get('api/date/now').success(function(data) {
        $scope.nowFromServer = new Date(parseInt(data));
      });
  }])
  .controller('Page2Ctrl', ['$scope', '$http', function($scope, $http) {
       /* get data from ws*/
      $http.get('api/test_entities/3').success(function(data) {
        $scope.entity3 = data;
      });
      /* initiate object {{ents}} */
      $scope.ents =[
                  {'id':'1', 'name':'test-1','email':'test-1@test.com'},
                  {'id':'2', 'name':'test-2','email':'test-2@test.com'},
                  {'id':'3', 'name':'test-3','email':'test-3@test.com'},
                  {'id':'4', 'name':'test-4','email':'test-4@test.com'}
                  ];
  }])

  .controller('Page3Ctrl', ['$scope', '$http', function($scope, $http) {
      $http.get('api/test_entities').success(function(data) {
        $scope.entities = data;
      });
  }])

 .controller('Page4Ctrl', ['$scope', 'TestEntityFactory', function($scope, TestEntityFactory) {
      $scope.user={id:null, firstName:'', lastName:''};
      $scope.entities =[];
      $scope.fetchAllUsers = function(){
        TestEntityFactory.findAllTestEntity().then(
            function(data){
                $scope.entities = data;
            },
            function(errResponse){ console.error('Error while fetching Currencies'); }
        );
      };
      $scope.fetchAllUsers();

       //add an entity
        $scope.createUser = function(user){
            TestEntityFactory.createTestEntity(user).then(
                function(data){
                    console.log('retrieve all');
                    $scope.fetchAllUsers();
                },
                function(errResponse){ console.error('Error while fetching Currencies'); }
            );

        };
        $scope.reset = function(){
          $scope.user={id:null, firstName:'', lastName:''};
          $scope.myForm.$setPristine();
        };

        $scope.submit= function(){
            if($scope.user.id == null){
                console.log('saving new user', $scope.user);
                $scope.createUser($scope.user);
            }
            $scope.reset();
        };
  }])
;
