UsersService.$inject = ['$http'];

function UsersService($http) {
  let service = {};
  service.getAll = getAll;
  service.getById = getById;
//  service.getByUsername = getByUsername;
  service.create = create;
//  service.update = update;
//  service.Delete = Delete;
  service.list = getAll;

  service.add = function(name, password) {
    let user = new User(name, password);
    service.create(user);
  };
  //dummy data
  service.add('aviv', 'adt');


  let apiUrl = 'http://127.0.0.1:8080/api/generic/users';
  function getAll() {
    console.log('apiUrl');
    return $http.get(apiUrl).then(handleSuccess, handleError('Error getting all users'));
  }

  function getById(id) {
    return $http.get(apiUrl + '/' + id).then(handleSuccess, handleError('Error getting user with id:' + id));
  }

  function create(user) {
    return $http.post(apiUrl, user).then(handleSuccess, handleError('Error Creating User'));
  }


  return service;


  function handleSuccess(data) {
    return data;
  }

  function handleError(error) {
    return function() {
      return{ success: false, message: error};
    };
  }
}

class User {
  constructor(name, password) {
    this.username = name;
    this.password = password;
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
