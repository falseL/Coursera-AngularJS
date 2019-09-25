(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.stateOfLunch = "";
    $scope.lunchList = "";
    $scope.myStyle = "";

    $scope.checkLunch = function () {
      var numberOfItems = getNumberOfItems($scope.lunchList);
      if (numberOfItems == 0) {
        $scope.myStyle = {'color':'red', 'border-color': 'red', 'border-style': 'solid'}
        $scope.stateOfLunch = "Please enter data first";
      }
      else {
        $scope.myStyle = {'color':'green', 'border-color': 'green', 'border-style': 'solid'}
        if (numberOfItems <= 3) {
          $scope.stateOfLunch = "Enjoy!";
        }
        else {
          $scope.stateOfLunch = "Too much!";
        }
      }

    };

    function getNumberOfItems(string) {
      if (!string) return 0;
      var numberOfItems = string.split(',').filter(Boolean).length;
      return numberOfItems;
    };
  }

})();
