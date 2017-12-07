'use strict';

var Hapi = require('hapi');
var models = require('./models');

// create the server
var server = new Hapi.Server({
    connections: {
        routes: {
        cors: true
        }
    }
});

server.connection({ port : 8081 })

// routes module
server.route(require('./lib/routes'));

models.sequelize.sync().then(function() {
    server.start(function() {
    console.log('Running on 8081');
    });
});