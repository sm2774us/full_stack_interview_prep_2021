﻿//http://odetocode.com/blogs/scott/archive/2013/02/28/mapping-an-angular-resource-service-to-a-web-api.aspx
angularAzureDemoFactories.factory('imageBlob', ['$resource', function ($resource) {

    var urlBase = '/api/imageblob/:id';

    return $resource(
        urlBase,
        { id: "@id" },
        {
            "save": { method: "POST", isArray: false }
        });
}]);
