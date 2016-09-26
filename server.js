'use strict';

// load enviroment data (variables)
require('dotenv').config();

// load required packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// enable cors
const cors = require('cors');
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

let contacts = require('./data');

// app.user(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());

/*app.use('api/contacts', require('./api/contacts/routes/get-contacts'));
app.use('api/contacts', require('./api/contacts/routes/get-contact'));
app.use('api/contacts', require('./api/contacts/routes/post-contact'));*/

// include de routes or endpoints
app.use(require('./app/routes'));

// configure the server
const hostname = 'localhost';
const port = process.env.PORT || 3001;

// configure mongoose
const mongoose = require('mongoose');
//const uriUtil = require('mongodb-uri');
const mongodbUri = process.env.DB_URI;
//const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.listen(port, hostname, () => {
    mongoose.connect(mongodbUri, dbOptions, (err) => {
        if (err) {
            console.log('Something bad happened initilizing Abs api', err);
        }

        console.log(`Abs is listening on http://${hostname}:${port}`);
    });
});

/*
app.get('/api/contacts', (request, response) => {
    if (!contacts){
        response.status(404).json({ message: 'No contacts found'});
    }
    response.json(contacts);
});

app.get('/api/contacts/:id', (req, resp) => {
    const requestId = req.params.id;
    let contact = contacts.filter(contact => {
        return contact.id == requestId;
    });

    if (!contact || contact.length == 0) {
        resp.status(404).json({ message: 'No contact found'});
    }

    resp.json(contact[0]);
});

app.post('/api/contacts', (request, response) => {
    const contact = {
        id: contacts.length + 1,
        name: request.body.firstname
    };

    contacts.push(contact);
    response.json(contact);
});


app.put('/api/contacts/:id', (request, response) => {
    const requestId = request.params.id;
    let contact = contacts.filter(contact => {
        return contact.id == requestId;
    })[0];

    const index = contacts.indexOf(contact);
    const keys = Object.keys(request.body);
    
    keys.forEach(key => {
        contact[key] = request.body[key];
    });

    contacts[index] = contact;
    response.json(contacts[index]);
});


app.delete('/api/contacts/:id', (request, response) => {
    const requestId = request.params.id;
    let contact = contacts.filter(contact => {
        return contact.id == requestId;
    })[0];

    const index = contacts.indexOf(contact);
    contacts.splice(index, 1);
    response.json({ message: `Contact ${requestId} deleted` });
});
*/

/*
// Http Server
const http = require('http');

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end('<h2>Hello world!</h2>');
});*/
