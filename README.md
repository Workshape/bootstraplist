## BootstrapList
[![Circle CI](https://circleci.com/gh/Workshape/bootstraplist.svg?style=svg)](https://circleci.com/gh/Workshape/bootstraplist)

### Setup

You will need to install [RethinkDB](http://www.rethinkdb.com). You can find instruction on how to do so [here](http://rethinkdb.com/docs/install/).

 - Run `npm install`
 - If your local environment is not reflected by `config/default.json`, then add a file at `config/local.json` to provide local customisation.
 - Run `npm run db-setup` to set up DB

### Running Dev Server

 - Run `npm start` will start Webpack dev server - for serving the client, and also start the API server
 - Go to http://localhost:3001 in two seperate tabs - see changes propagate in real time (Hot Module Replacement works too)

### Running Production Server

You will need to roll out your own deployment script for a server, but before you can ship you will need to:

 - Build the client with `npm run build:prod`
 - Ensure all production npm modules are installed on the server. e.g. `npm install --prod`
 - Rsync your application to your server
 - Set up nginx or your web server of choice to map HTTP requests for your URL to `http://localhost:3000`
 - Run `npm run start:prod` to run on your server
 - Go to your URL

### Tech Used

| **Tech** | **Description** | **Version** |
| ---------|-----------------|-------------|
| [React](https://facebook.github.io/react/) | View layer | 0.14.7 |
| [React Router](https://github.com/reactjs/react-router) | Universal routing | 2.0.0 |
| [Redux](http://redux.js.org/) | State management | 3.1.0 |
| [RethinkDB](http://www.rethinkdb.com) | Persistance layer | 2.2.4 |
| [Express](http://expressjs.com/) | Node.js server framework | 4.13.3 |
| [Socket.io]() | Used for realtime communication between clients and server | 1.4.4 |
| [Webpack](https://webpack.github.io/) | Module bundling + build for client | 1.12.11 |
| [Superagent](https://github.com/visionmedia/superagent) | Universal http requests | 1.6.1 |
| [Stylus](http://stylus-lang.com/) | Expressive, dynamic, robust CSS | 0.53.0 |




