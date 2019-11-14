const express = require('express');

const Users = require('../users/users-model.js');

const server = express();

server.use(express.json());

server.get('/users', (req, res) => {
    Users.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(error => {
        res.status(500).json(error);
      });
});

server.post('/users', (req, res) => {
    Users.add(req.body)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

server.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    Users.findById(id)
    .then(user => {
        Users.remove(id);
        res.status(200).json(user);
    })
    .catch(error => {
        res.status(500).json(error);
    });
})

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome!!' });
});



module.exports = server;
