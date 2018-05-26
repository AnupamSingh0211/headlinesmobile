var express = require('express');
var app = express();
var path = require('path');
var jsonFile = require(path.join(__dirname + '/assetlinks.json'));
console.log(`thats its${jsonFile}`);

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.get('/assetlinks.json', function(req, res) {
    console.log(path.join(__dirname + '/assetlinks.json'));
  res.send(jsonFile);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});