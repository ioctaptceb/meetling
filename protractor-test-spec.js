describe('angularjs homepage todolist', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:3000');

    element(by.model('users.name')).sendKeys('new name');
    element(by.model('users.timezone')).sendKeys('timezone');
    element(by.css('[value="sumbit"]')).click();
    element(by.model('users.name')).sendKeys('new name');
    element(by.model('users.timezone')).sendKeys('timezone');
    element(by.css('[value="sumbit"]')).click();

    var user = element.all(by.repeater('user in users.list'));
    expect(user.get(1).getText()).toEqual('new name timezone Hello! Welcome');
    expect(user.count()).toEqual(3);

  });
});
