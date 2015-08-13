var restify = require('restify');
var pgRestify = require('pg-restify');

var next_user_id = 0;
var users = {};

var server = restify.createServer({
    name: 'meetling',
    version: '1.0.0'
    });

restify.CORS.ALLOW_HEADERS.push('Access-Control-Allow-Origin');

server.use(restify.CORS());

pgRestify.initialize({
  server: server,
  pgConfig: 'pg://localhost/meetling'
}, function(err,pgRestifyInstance) {


  server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
});
