'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let contacts = require('./mock-data/data.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/contacts', (request, response) => {
  if (!contacts || contacts.length === 0) {
    response.status(404).send({ message: 'No contacts found' });
  }

  response.json(contacts);
});

app.get('/api/contacts/:id', (request, response) => {
  const requestId = request.params.id;
  let contact = contacts.filter(contact => contact.id == requestId);

  if (!contact || contact.length === 0) {
    response.status(404).send({ message: 'No contact found' });
  }

  response.json(contact[0]);
});

app.post('/api/contacts', (request, response) => {
  const contact = {
    id: `${contacts.length * Math.floor(Math.random() * 1000) + 1}`,
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email: request.body.email,
    website: request.body.website
  };

  contacts.push(contact);
  response.json(contact);
});

app.put('/api/contacts/:id', (request, response) => {
  const requestId = request.params.id;

  let contact = contacts.filter(contact => {
    return contact.id == requestId
  })[0];

  const index = contacts.indexOf(contact);
  const keys = Object.keys(request.body);

  keys.forEach(key => {
    return contact[key] = request.body[key];
  });

  response.json(contacts[index]);
});

app.delete('/api/contacts/:id', (request, response) => {
  const requestId = request.params.id;

  let contact = contacts.filter(contact => {
    return contact.id == requestId;
  })[0];

  const index = contacts.indexOf(contact);

  contacts.splice(index, 1);

  response.send({ message: `User ${requestId} deleted.`});
});

const hostname = '127.0.0.1';
const port = 3001;

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
