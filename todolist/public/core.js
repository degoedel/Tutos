var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};
    
    //when landing on the page, get all the todos and show them
    $http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
        
      // when submitting the form send the text to the api
      $scope.createTodo = function() {
        $http.post('api/todos', $scope.formData)
        .success(function(data) {
            $scope.formData = {}; // clear the form
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        }  
        )};
        
        //Delete a todo after checking it
        $scope.deleteTodo = function(id) {
            $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        };
}