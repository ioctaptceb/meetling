export default function() {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    template: '<span>Welcome</span>'
  };
}
