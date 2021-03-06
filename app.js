var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('Hello World');
});
app.get('/healthz', function(req, res) {
  // do app logic here to determine if app is truly healthy
  // you should return 200 if healthy, and anything else will fail
  // if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send('I am happy and healthy\n');
});
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
