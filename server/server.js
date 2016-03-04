var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname+'/../node_modules'));
//app.use('/static', express.static(__dirname + '../node_modules'));

// app.get('/', function(req, res){
//   res.sendFile(ind)
// });

var server = app.listen(port);

require('./routes.js')(app, express);