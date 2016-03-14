import './overrides';

import path from 'path';
import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import config from 'config';

import * as api from './api/http';
import * as subscriptionService from './api/service/subscription';
import * as appController from './controller/app.js';

/*
 * Server
 *
 * Configures and starts Express server
 */
process.on('uncaughtException', function (exception) {
    console.log(' [x] Uncaught Exception:', exception);
    console.log(exception.stack);
    console.log(' [x] ------------------------------');
});

const app = express();
const httpServer = http.createServer(app);
const port = config.get('express.port') || 3000;
var io = socketIO(httpServer);

// View engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Server middleware
app.use(require('serve-static')(path.join(__dirname, '../', config.get('buildDirectory'))));
app.use(require('serve-static')(path.join(__dirname, '../static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API Endpoints
app.post('/api/0/subscriptions', api.addSubscription);
app.post('/api/0/companies', api.addCompany);

// Universal Application endpoint
app.get('*', appController.handleRender);

// Live Updates
subscriptionService.liveUpdates(io);

// Set up server listening for connections on port specified in config
httpServer.listen(port);
console.log(`Listening on port ${port}...`);