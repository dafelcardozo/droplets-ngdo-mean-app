/// <reference path="../typings/index.d.ts" />

'use strict';

if ('production' === process.env.NODE_ENV)
    require('newrelic');

var PORT = process.env.PORT || 8080;

import * as express from 'express';
import * as os from 'os';
import * as http from 'http';
import {RoutesConfig} from './config/routes.conf';
import {DBConfig} from './config/db.conf';
import {Routes} from './routes/index';
import * as sio from 'socket.io';

const app = express();

RoutesConfig.init(app);
DBConfig.init();
Routes.init(app, express.Router());



let server = http.createServer(app)
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);


    });


    let io = sio.listen(server);

    io.on('connection', function(socket){
      console.log('a user connected');
      socket.on('chat message', function(msg){
        console.log('chat message received' );
        io.emit('chat message', msg);
        console.log('and reemitted' );
      });
      socket.on('disconnect', function(){
        console.log('user disconnected');
      });
    });
