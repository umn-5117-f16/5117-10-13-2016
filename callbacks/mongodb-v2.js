var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var mongoURI = 'mongodb://ec2-54-175-174-41.compute-1.amazonaws.com:80/'
var db_name = "5117-individual"
var db_user = "5117user"
var db_pswd = "5117pass"
var x500 = "max"

var mdb

var rootHandler = function(req, res) {
  mdb.collection(x500 + '_messages').find().toArray(
    function(err, all_messages){
      res.send({'messages': all_messages})
    }
  )
}

var runApp = function() {
  app = express();
  app.set('view engine', 'ejs')

  app.get('/', rootHandler)

  var server = app.listen(3000)
  console.log('listening on port 3000!')
}

var onMongoConnect = function(err, db) {
  if (err) {
    throw err;
  }
  db.authenticate(db_user, db_pswd, function(err, result) {
    if (err) {
      throw err;
    }
    mdb = db
    runApp()
  })
}

MongoClient.connect(mongoURI + db_name, onMongoConnect)
