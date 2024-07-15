/*
    Author: Winfrey Nainggolan
*/ 

const hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const {MONGOURL} = require('./keys');

async function start() {
    const server = hapi.server({
        port: 3000,
        host: 'localhost',
    });

    
    // connect to the database mongodb
    mongoose.connect(MONGOURL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });
    mongoose.connection.on('error', (err) => {
        console.log('Error connecting to MongoDB', err);
    });

    // model import
    require('./models/post');
    require('./models/category');
    require('./models/comment');

    // routes import
    server.route(require('./routes/post'));
    server.route(require('./routes/category'));
    server.route(require('./routes/comment'));


    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

start();



