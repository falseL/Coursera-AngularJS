(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/")
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundItems',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var foundItems = this;

    foundItems.emptyList = function () {
      return (!foundItems.items.length);
    };
  }
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;
    list.found = [];
    list.getMatchedMenuItems = function () {
      if (list.query) {
        var promise = MenuSearchService.getMatchedMenuItems(list.query);
        promise.then(function (response) {
          list.found = response;
        });
      }
    }
    list.removeItem = function (index) {
      list.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (query) {
      return $http({ url: ApiBasePath + 'menu_items.json' })
        .then(function (result) {
          if (query) {
            var foundItems = [];
            // process result and only keep items that match
            for (var item of result.data.menu_items) {
              console.log(item.description);
              console.log(query);
              if (item.description.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                foundItems.push(item);
              }
            }
            // return processed items
            return foundItems;
          }
          else {
            return null;
          }
        });
    }
  }

})();