var express = require('express');
var path = requore('path');
var app = express();
var rootpath = path.normalize(_dirname + '/../');

app.use(express.static(rootpath + '/app'));

app.listen(8080);
console.log('Heyooo this is working on port 8080');
