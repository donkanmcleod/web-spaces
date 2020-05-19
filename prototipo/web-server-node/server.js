
const express = require('express');
const path    = require('path');
const app     = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000);

app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname +'/index2.html'))
});
