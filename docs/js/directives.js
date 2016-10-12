var contactDirectives = angular.module('contactDirectives', []);

contactDirectives.directive('contactTable', function (){
		return {
			templateUrl: 'partials/contacts.html'
		}
	}
);

contactDirectives.directive('details', function (){
		return {
			controller: 'MainCtrl',
			templateUrl: 'partials/details.html',
			link: function(scope, element, attr){
				scope.details = function(e) {
					for (var i = 0; i < scope.contactList.length; i++) {
						if(scope.contactList[i].id == e.currentTarget.id){
							scope.targetContact = scope.contactList[i];
						}
					};
				}
				scope.initNew = function() {
					scope.targetContact = {};
					angular.element(".create").css('display', 'inherit');
					angular.element(".update").css('display', 'none');
				}
				scope.initUpdate = function() {
					scope.targetContact = {};
					angular.element(".create").css('display', 'none');
					angular.element(".update").css('display', 'inherit');
				}
				scope.hideModal = function() {
					angular.element('#detailsModal').modal('hide');
				}
			}
		}
	}
);