function UserController(UsersService) {
  let vm = this;

  vm.list = [];

  var loadData = function() {
    UsersService.getAll().then(function(foo) {
      vm.list = foo.data;
    });
  };
  console.log(vm.list);

  loadData();

  vm.add = () => {
    UsersService.add(vm.name, vm.timezone);
    loadData();
  };
}

UserController.$inject = ['UsersService', 'AuthenticationService'];

export default UserController;
