describe('Welcome Directive', function() {

  var element;
  beforeEach(module('meatlingApp'));
  beforeEach(inject(function(_User_, $compile, $rootScope) {
    User = _User_;
    scope = $rootScope.$new();
    element = $compile('<welcome user="user"></welcome>')(scope);
  }));

  it('welcomes the person', function() {
    scope.user = new User('matthias', 'CEST');
    scope.$digest();
    expect(element.find('span').text()).toEqual('Hello! Welcome');
  });
});
