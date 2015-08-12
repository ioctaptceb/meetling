export default function() {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    template: '<span>{{user.greet}} Welcome</span>'
  };
}
