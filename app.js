const express = require('express');
const app = express();

const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const products = require('./routes/products');
const PORT = 3000;

mongoose.Promise = require('bluebird');

// REQUIRE MIDDLEWARE

mongoose.connect('mongodb://mongo:27017/mongocrud');

app.use(bodyParser.json()); // add body parser

router.get('/hello', function(req, res) {
  res.send('Hello World!!');
});

app.get('/healthz', function(req, res) {
  // do app logic here to determine if app is truly healthy
  // you should return 200 if healthy, and anything else will fail
  // if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send('I am happy and healthy\n');
});

app.use('/products', products);

app.use(router);

app.listen(PORT, () => {
  console.log('started');
});

module.exports = app;
