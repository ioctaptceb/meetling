export default function() {
  let usersService = this;
  usersService.list = [{
  'name': 'xxxxxx',
  'timezone': 'xxxxxxx'
  }];

  console.log(usersService.list);
  usersService.add = function(name, timezone) {
    usersService.list.push({name, timezone});
  };

}



