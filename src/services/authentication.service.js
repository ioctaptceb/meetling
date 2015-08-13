function AuthenticationService($http, $cookies, $rootScope, $timeout, UsersService) {
  let service = {};

  service.login = login;
  service.setCredentials = setCredentials;
  service.clearCredentials = clearCredentials;

  return service;

  function login(username, password, callback) {
    $timeout(function () {
      let response;
      UsersService.getByUserName(username)
        .then(function(user) {
          if (user !== null && user.password === password) {
            response = { success: true };
          } else {
            response = {success: false, message: 'Username or Password is incorrect' };
          }
          callback(response);
        });
    }, 1000);
  }

  function setCredentials(username, password) {
    // TODO: add Base64 encoding here
    let authdata = `${username}:${password}`;

    $rootScope.globals = {
      currentUser: {
        username: username,
        authdata: authdata
      }
    };

    $http.defaults.headers.common.Authorization = 'Basic ' + authdata;
    $cookies.put('globals', $rootScope.globals);
  }

  function clearCredentials() {
    $rootScope.globals = {};
    $cookies.remove('globals');
    $http.defaults.headers.common.Authorization = 'Basic ';
  }
}

AuthenticationService.$inject = ['$http', '$cookies', '$rootScope', '$timeout', 'UsersService'];

export default AuthenticationService;
