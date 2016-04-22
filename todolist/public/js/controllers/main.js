// js/controllers/main.js
angular.module('todoController', [])

    .controller('mainController', function ($scope, $http, Todos) {
        $scope.formData = {};

        //when landing on the page, get all the todos and show them
        Todos.get()
            .success(function (data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });

        // when submitting the form send the text to the api
        $scope.createTodo = function () {
            if (!$isEmptyObject($scope.formData)) {
                Todos.create($scope.formData)
                .success(function (data) {
                    $scope.formData = {}; // clear the form
                    $scope.todos = data;
                    console.log(data);
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
            }
        };

        //Delete a todo after checking it
        $scope.deleteTodo = function (id) {
            Todos.delete(id)
                .success(function (data) {
                    $scope.todos = data;
                    console.log(data);
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };
    });