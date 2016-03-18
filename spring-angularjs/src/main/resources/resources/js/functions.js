var pageCtrls = angular.module('myApp.controllers', []);

pageCtrls.controller( 'Page2Ctrl', function($scope){
    $scope.ents =[
    {'id':'1', 'name':'test-1','email':'test-1@test.com'},
    {'id':'2', 'name':'test-2','email':'test-2@test.com'},
    {'id':'3', 'name':'test-3','email':'test-3@test.com'},
    {'id':'4', 'name':'test-4','email':'test-4@test.com'}
    ];
});