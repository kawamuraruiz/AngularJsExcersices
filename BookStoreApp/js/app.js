
var app = angular.module('bookStoreApp', []);

	app.controller('StoreController', function($scope, $http) {
		$http.get("js/libros.json").then(function (response) {
			$scope.products = response.data.leerlibros;
		});
	});