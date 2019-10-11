(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/');


    MenuDataService.$inject = ['$http', 'ApiBasePath', '$stateParams']
    function MenuDataService($http, ApiBasePath, $stateParams) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            });
            return response.then(function (result) {
                var categories = result.data;
                return categories;
            });
        }

        service.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            });
            return response.then(function (result) {
                var items = result.data;
                return items;
            });
        }
    }

})();
