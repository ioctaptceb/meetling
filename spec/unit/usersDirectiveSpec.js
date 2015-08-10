describe('Welcome Directive', function() {

  var element;
  beforeEach(module('meatlingApp'));
  beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile('<welcome user="user"></welcome')(scope);
  }));

  it('welcomes the person', function() {
    scope.$digest();
    expect(element.find('span').text()).toEqual('Hello! Welcome');
  });
});
