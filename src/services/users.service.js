function UsersService() {
  let usersService = this;
  usersService.list = [];

  usersService.add = function(name, timezone) {
    usersService.list.push(new User(name, timezone));
  };
  //dummy data
  usersService.add('aviv', 'adt');
}

class User {
  constructor(name, timezone) {
    this.id = 0;
    this.name = name;
    this.timezone = timezone;
    this.greet = User.greet('Hello!');
    this.friends = [];
    this.meatable = false;
    this.meatable_time = [];
  }

  static greet(value) {
    if (value == 'Hello!') {
      return value;
    } else {
      return 'hi';
    }
  }

}

export default UsersService;
