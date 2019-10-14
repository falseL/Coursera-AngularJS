(function () {
  "use strict";

  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService'];
  function SignupController(MenuService) {
    var signup = this;
    signup.feedback = "";

    signup.submit = function () {
      signup.completed = true;
      var response = MenuService.getItem(signup.user.favorite);

      response
      .then(function (result) {
        signup.user.item = result;
        MenuService.saveUser(signup.user);
        signup.feedback = "Your information has been saved";
      })
      .catch(function (error) {
        console.log(error);
        signup.feedback = "No such menu number exists";
      });
    };
  }
})();
