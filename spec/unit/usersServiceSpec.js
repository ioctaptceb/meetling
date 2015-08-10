describe('User', function() {

  var User;
  beforeEach(module('meatlingApp'));
  beforeEach(inject(function(_User_) {
    User = _User_;
  }));

  describe('Constructor', function() {

    it('assigns a name and a timezone', function() {
      testUser = new User('yulia', 'CEST');
      expect(testUser.name).toEqual('yulia');
      expect(testUser.timezone).toEqual('CEST');
    });

  });
});
