describe('Welcome Directive', function() {

  var element;
  beforeEach(module('meatlingApp'));
  beforeEach(inject(function(_UsersService_, $compile, $rootScope) {
    users = _UsersService_;
    users.add('aviv', 'ADT');
    scope = $rootScope.$new();
    element = $compile('<welcome user="user"></welcome>')(scope);
  }));

  it('welcomes the person', function() {
    scope.user = users.list[0];
    scope.$digest();
    expect(element.find('span').text()).toEqual('Hello! Welcome');
  });
});
