(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itemDetail = this;
  itemDetail.items = items.menu_items;
  itemDetail.name = items.category.name;
}

})();