describe('UsersService', function() {

  var user;
  beforeEach(module('meatlingApp'));
  beforeEach(inject(function(_UsersService_) {
    user = _UsersService_;
  }));

  describe('Constructor', function() {

    it('assigns a name and a timezone', function() {
      testUser = user.list;
      user.add('yulia', 'CEST');
      expect(testUser[1].name).toEqual('yulia');
      expect(testUser[1].timezone).toEqual('CEST');
    });

  });
});
