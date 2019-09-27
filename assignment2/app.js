(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.itemCheckOff = function (index) {
      ShoppingListCheckOffService.itemCheckOff(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuy = [{
      name: "cookies",
      quantity: 10
    },
    {
      name: "chips",
      quantity: 9
    },
    {
      name: "coke",
      quantity: 8
    },
    {
      name: "eggs",
      quantity: 5
    },
    {
      name: "milk",
      quantity: 6
    },
    {
      name: "candy",
      quantity: 3
    },
    {
      name: "coffee",
      quantity: 1
    },
    {
      name: "tea",
      quantity: 2
    },
    {
      name: "oil",
      quantity: 4
    }, 
    {
      name: "water",
      quantity: 7
    }
    ];
    var bought = [];

    service.getToBuyItems = function () {
      return toBuy;
    };

    service.getBoughtItems = function () {
      return bought;
    };

    service.itemCheckOff = function (index) {
      var item = toBuy.splice(index, 1);
      bought.push(item[0]);
    }
  }

})();