describe('UsersService', function() {

  var user;
  var foo;
  beforeEach(module('meetling'));
  beforeEach(inject(function(_UsersService_) {
    user = _UsersService_;
    user.getById('1').then(function(r){
      foo = r.data;
    });
  }));

  describe('Constructor', function() {

    it('assigns a name and a timezone', function() {
      testUser = user.list;
      user.add('yulia', 'CEST');
      expect(testUser[1].name).toEqual('yulia');
      expect(testUser[1].timezone).toEqual('CEST');
    });

  });

  describe('getAll', function() {
    it('gets list of all users', function() {
      var list = user.getAll();
      console.log(list);
      expect(list).toBeTruthy();
    });
  });
});
