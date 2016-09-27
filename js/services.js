var contactServices = angular.module('contactServices', ['ngResource']);
var key = '1023d877-621d-4d03-aa9a-df71222a0946';

contactServices.factory('AddressList', ['$resource',
	function($resource){
		return $resource('http://front-end.oudemo.com/api/address/list/?apikey=:apikey', null, {
			'get': {method:'GET', params:{apikey:key}, isArray:false}
		});
	}
]);

contactServices.factory('AddressCreate', ['$http',
	function($http){

		var httpFactory = {};

		httpFactory.newContact = function (data){
			data.apikey = key;
			return $http.post('http://front-end.oudemo.com/api/address/new/', data);
		};

		httpFactory.saveContact = function (data){
			data.apikey = key;
			return $http.post('http://front-end.oudemo.com/api/address/update/', data);
		};

		httpFactory.deleteContact = function (data){
			data.apikey = key;
			return $http.post('http://front-end.oudemo.com/api/address/delete/', data);
		};

		return httpFactory;
	}
]);