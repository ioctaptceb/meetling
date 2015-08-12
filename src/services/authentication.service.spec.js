describe('AuthenticationService', function(){
  var authenticationService, instanced;
  beforeEach(module('meetling'));
  beforeEach(inject(function(_AuthenticationService_) {
    authenticationService = _AuthenticationService_;
    instanced = authenticationService.login( 'foo', 'bar');
    console.log(authenticationService);
  }));

  describe('user login', function() {
    it('with wrong credentials', function () {
      expect(instanced).toExist();
    });
  });
});

