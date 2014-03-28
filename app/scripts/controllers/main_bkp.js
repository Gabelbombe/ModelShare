'use strict';

var app = angular.module('ModelShareApp');

app.factory('SessionResource', function($resource){
	var url = 'http://www.mocky.io/v2/5334508f6c7507900e8e275c',
		params = {
			output: 'json',
            callback: 'JSON_CALLBACK'
		},
		options = {
            query: {
                method: 'JSONP'
            }
        };
	return $resource(url, params, options);
});

app.service('SessionModel', function(SessionResource) {
	var Session = function() {
		this.data = {
			id: null,
			token: '#DefaultToken'
		};
	};
	Session.prototype.fetch = function() {
		var self = this;
		SessionResource.query(function(result) {
			self.data = result.data;
		});
	};
	return new Session();
});

app.controller('SessionController', function ($scope, SessionModel) {
	$scope.SessionModel = SessionModel;
	$scope.fetch = function() {
		SessionModel.fetch();	
	};
});

app.controller('MediaController', function ($scope, SessionModel) {
	$scope.SessionModel = SessionModel;
});
