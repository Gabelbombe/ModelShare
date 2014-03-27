'use strict';

var app = angular.module('modelshareApp');

// http://www.mocky.io/v2/5334508f6c7507900e8e275c
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