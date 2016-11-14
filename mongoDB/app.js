var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://mydb:asdfgh@ds151137.mlab.com:51137/mydb';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Connected correctly to server.');

  mydbInit(db, function(){
      console.log("init OK.");
      db.close();
  });
});
