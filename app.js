/* Use express app */
const express = require('express');
/* Initialize express app */
const app = express();
const routes = require('./api/routes.js')

app.use(express.static(__dirname + '/public'));

app.get('/', routes);

app.listen(8080, function(){
	console.log('App listening on 8080!')
});
