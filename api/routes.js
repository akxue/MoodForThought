/* Set up router */
const express = require('express');
const router = express.Router();

/* Configure router to log */
router.use(function(req, res, next){
	console.log('/' + req.method);
	next();
});

router.get('/', function(req, res){
	res.sendFile(__dirname + '/public/homepage.html');
});

module.exports = router;
