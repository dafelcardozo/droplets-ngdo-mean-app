/// <reference path="../typings/index.d.ts" />
'use strict';
if ('production' === process.env.NODE_ENV)
    require('newrelic');
var PORT = process.env.PORT || 8080;
var express = require('express');
var os = require('os');
var http = require('http');
var routes_conf_1 = require('./config/routes.conf');
var db_conf_1 = require('./config/db.conf');
var index_1 = require('./routes/index');
var sio = require('socket.io');
var app = express();
routes_conf_1.RoutesConfig.init(app);
db_conf_1.DBConfig.init();
index_1.Routes.init(app, express.Router());
var server = http.createServer(app)
    .listen(PORT, function () {
    console.log("up and running @: " + os.hostname() + " on port: " + PORT);
    console.log("enviroment: " + process.env.NODE_ENV);
});
var io = sio.listen(server);
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (msg) {
        console.log('chat message received');
        io.emit('chat message', msg);
        console.log('and reemitted');
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
