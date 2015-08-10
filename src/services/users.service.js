module.exports = function() {
  return function User (name, timezone) {
    this.name = name;
    this.timezone = timezone;
    this.greet = function () {
      return 'Hello!'; 
    };
  };
};

