describe('UserController', function() {
  var User,
      controller;
  
  beforeEach(module('meatlingApp'));


  beforeEach(inject(function(_User_, $controller) {
    User = _User_;
    controller = $controller;
  }));

  it('should give us a user', function() {
    var vm = controller('UserController');
    expect(vm.user instanceof User).toBeTruthy();
  });
});
