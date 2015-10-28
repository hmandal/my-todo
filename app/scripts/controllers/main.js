'use strict';
/**
 * @ngdoc function
 * @name myTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myTodoApp
 */
angular.module('myTodoApp').controller('MainCtrl', function($scope, localStorageService) {
    // angular.module('myTodoApp').controller('MainCtrl', ['$scope', 'localStorageService ', function($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];
    $scope.$watch('todos', function() {
        localStorageService.set('todos', $scope.todos);
    }, true);
    $scope.addTodo = function() {
        // if ($scope.todo.trim() && $scope.todos.indexOf($scope.todo) === -1) { //does not allows duplicate items
            $scope.todos.push($scope.todo.trim());
        // }
        $scope.todo = '';
    };
    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
    };
});
// }]);