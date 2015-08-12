function UserController(UsersService) {
  let vm = this;

  vm.list = UsersService.list;

  vm.add = () => {
    UsersService.add(vm.name, vm.timezone);
  };
}

UserController.$inject = ['UsersService'];

export default UserController;
