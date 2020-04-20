var express = require('express');
var app = express();

// configures express to use ejs template engine
app.set('view engine','ejs');

// define routes
var routes = require('./routes/routes.js');

app.use(express.static(__dirname +'/public'));

app.get('/',routes.home);
app.get('/:city',routes.city);

var port = 8000;

var server = app.listen(8000, (req,res) => {
        console.log('the application is running at http://localhost:' +port);
})