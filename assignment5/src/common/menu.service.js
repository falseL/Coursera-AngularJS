(function () {
  "use strict";

  angular.module('common')
    .service('MenuService', MenuService);


  MenuService.$inject = ['$http', 'ApiPath'];
  function MenuService($http, ApiPath) {
    var service = this;
    var registeredUser = null;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };

    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = { 'category': category };
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };

    service.getItem = function (item) {
      return $http.get(ApiPath + '/menu_items/' + item + '.json').then(function (response) {
        return response.data;
      });
    };

    service.saveUser = function (user) {
      registeredUser = user;
      console.log(registeredUser)
    }

    service.getUser = function () {
      return registeredUser;
    }

  }
})();