
/**
 * Module dependencies.
 */

var express = require('express')
    , http = require('http')
    , path = require('path')
    , FacebookClient = require('facebook-client').FacebookClient
    , facebook_client = new FacebookClient('239852489492339', 'f92d144d0b3addadea09e804ac638873');


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

app.post('/me', function(req, res){

});

app.get('/', function(req, res){
    console.log(req.headers);
    console.log(req.query);

    res.end();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
