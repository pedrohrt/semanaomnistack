const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');

const app = express(); 
const server = http.Server(app);

mongoose.connect('mongodb+srv://pedrhrt:1q21q21q2@cluster0-jgwyq.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(4444);
