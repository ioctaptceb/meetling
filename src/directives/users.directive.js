function Welcome() {
  return {
    restrict: 'E',
    scope: {
      person: '='
    },
    template: '<span>{{person.greet()}} Welcome</span>'
  };
}

module.export = Welcome;
