describe('UserController', function() {
  var user,
      controller;

  beforeEach(module('meetling'));

  beforeEach(inject(function(_UsersService_, $controller) {
    user = _UsersService_;
    controller = $controller;
  }));

  it('should give us a user', function() {
    var vm = controller('UserController');
    // add a user as dummy data
    vm.add('aviv','ADT');
    expect(typeof vm.list[0] == 'object').toBeTruthy();
  });
});
