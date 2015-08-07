describe('UsersService', function() {
  beforeEach(module('meatlingApp'));

  it('should return the correct length of users', inject(function ($service) {
    var scope = {},
    ctrl = $service('UsersListCtrl',{$scope:scope});

    expect(scope.users.length).toBe(4);
  }));
  console.log('wrote a test');
});
