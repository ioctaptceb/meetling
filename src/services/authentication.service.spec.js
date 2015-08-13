describe('AuthenticationService', function(){
  var authenticationService, instanced;
  beforeEach(module('meetling'));
  beforeEach(inject(function(_AuthenticationService_) {
    authenticationService = _AuthenticationService_;
  }));

  describe('user login', function() {
    it('with wrong credentials', function () {
      expect(authenticationService).toBeTruthy();
    });
  });
});

