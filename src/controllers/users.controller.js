function UserController(User) {
  var vm = this;
  vm.name = {};
  vm.user = new User('aviv', 'ADT');
}

UserController.$inject = ['User'];

module.export = UserController;
