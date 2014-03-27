'use strict';

var app = angular.module('modelshareApp');

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
    var Model = function(defaults, resource) {
        this.data     = defaults;
        this.resource = resource;
    };

    //NOTICE: private member is not accessible??
    Model.prototype.fetch = function() {
        var self = this;

        this.resource.query(function(result) {
            self.data = result.data;
        });
    };
    return Model;
});

app.factory('SessionResource', function(AbstractResource) {
    var endpoint = '/v2/5334508f6c7507900e8e275c',
        params   = {},
        options  = {};
    return new AbstractResource(endpoint, params, options);
});

