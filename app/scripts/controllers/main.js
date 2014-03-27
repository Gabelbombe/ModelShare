'use strict';

var app = angular.module('modelshareApp');

// http://www.mocky.io/v2/5334508f6c7507900e8e275c
app.factory('AbstractResource', function($resource) {

    var baseURL = 'http://www.mocky.io',
        baseParams =  {
          callback: 'JSON_CALLBACK'
        },
        baseOptions = {
            query: {
                method: 'JSONP'
            }
        };

    return function(endpoint, params, options) {
        var url = baseURL + endpoint,
            p = _.extend(params,  baseParams),
            o = _.extend(options, baseOptions);
        return $resource(url, p, o);
    };
});

app.factory('AbstractModel', function() {
    var Model = function() {
        
    };
});