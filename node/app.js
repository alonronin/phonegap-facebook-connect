
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 80);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/:url', function(req, res){
    var html = '<script>var url = \''+ req.params.url +'\'; location.href = url;</script>';
    res.send(html);
});

app.get('/', function(req, res){
    console.log(req.headers);
    console.log(req.query.test);
    res.send('<script>var url = \''+ req.query.test +'\';</script><script src="http://192.168.1.11:8080/target/target-script-min.js#anonymous"></script>')
})
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
