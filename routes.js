/* Set up router */
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var url = "mongodb://localhost:27017/letters";

var datab;

/* Configure router to log */
router.use(function(req, res, next){
	console.log('/' + req.method);
	next();
});

/* When they input mood, we find json that match */
router.post('/test', function(req, res){
	// console.log(user_mood);
	var user_mood = req.body.mood;
	console.log(req.body);
	//res.json({mood: user_mood});
	findDocuments(datab, user_mood, function(){

	});

});

router.get('/', function(req, res){
	console.log(__dirname);
	res.sendFile(__dirname + '/public/homepage.html');
});


router.get('/post/:mood-:description', function(req, res){
	var user_mood = req.params.mood;
	var user_desc = req.params.description;
	res.json({description: user_desc, mood: user_mood})
	insertDocuments(datab, user_desc, user_mood, function(){
		indexCollection(datab, function(){});
	});
});

/* Connect mongoClient */
MongoClient.connect(url, function(err, db){
	datab = db
	// console.log(datab);
	console.log("Connected successfully!");

	// db.close();
});

var insertDocuments = function(db, user_desc, user_mood, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  //inserts one object
  collection.insertOne(
    {description: user_desc, mood: user_mood},
    function(err, result) {
    assert.equal(err, null);
    console.log("Inserted recommendation into the collection");
    callback(result);
  });
}

var findDocuments = function(db, my_mood, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({'mood' : my_mood}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

var indexCollection = function(db, callback) {
  db.collection('documents').createIndex(
    { mood: "text" },
      null,
      function(err, results) {
        console.log(results);
        callback();
    }
  );
};

module.exports = router;
