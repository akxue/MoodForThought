/* Use express app */
const express = require('express');
const bodyParser = require('body-parser');
/* Initialize express app */
const app = express();
const routes = require('./routes.js');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(8080, function(){
	console.log('App listening on 8080!')
});
