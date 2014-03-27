'use strict';

var app = angular.module('modelshareApp');

app.factory('DefaultResource', function($resource) {

    var baseURL = 'http://www.mocky.io',
        baseParams =  {
          callback: 'JSON_CALLBACK'
        },
        baseOptions = {
            query: {
                method: 'JSONP'
            }
        }

});