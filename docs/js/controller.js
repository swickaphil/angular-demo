var module = angular.module('MainCtrl', ['contactServices']);

module.controller('MainCtrl', ['$scope', '$window', 'AddressList', 'AddressCreate', function($scope, $window, AddressList, AddressCreate){

		$scope.readList = function(){
			if($scope.loading != true){
				$scope.loading = true;
			}
			AddressList.get().$promise.then(function (resource) {
			    $scope.contactList = resource.result;
				$scope.loading = false;
			});
		}

		$scope.saveContact = function() {
			$scope.loading = true;
			AddressCreate.saveContact($scope.targetContact)
				.success(function (resource) {
					$scope.loading = false;
				})
				.error(errorHandler());
		};

		$scope.deleteContact = function() {
			$scope.loading = true;
			AddressCreate.deleteContact({id:$scope.targetContact.id})
				.success(function (resource) {
					$scope.readList();
				})
				.error(errorHandler());
		};

		$scope.createContact = function(){
			$scope.loading = true;
			AddressCreate.newContact($scope.targetContact)
				.success(function (resource) {
					$scope.readList();
				})
				.error(errorHandler());
		}

		$scope.resetQuery = function(){
			console.log($scope.direction);
			$scope.query = undefined;
			$scope.direction = "ascending";
			$scope.contactOrder = "lastName";
		}

		function errorHandler(e){
			//console.log(e);
		}

		$scope.resetQuery();
		$scope.readList();
	}
]);