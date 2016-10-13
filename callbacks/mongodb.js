var MongoClient = require('mongodb').MongoClient;

var mongoURI = 'mongodb://ec2-54-175-174-41.compute-1.amazonaws.com:80/'
var db_name = "5117-individual"
var db_user = "5117user"
var db_pswd = "5117pass"
var x500 = "max"

MongoClient.connect(mongoURI + db_name, function(err, db){
  if (err) {
    throw err;
  }

  db.authenticate(db_user, db_pswd, function(err, result) {
    if (err) {
      throw err;
    }

    var express = require('express');

    app = express();
    app.set('view engine', 'ejs')

    app.get('/', function(req, res) {
      db.collection(x500 + '_messages').find().toArray(
        function(err, all_messages){
          res.send({'messages': all_messages})
        })
      })

    var server = app.listen(3000)
    console.log('listening on port 3000!')

  })
})
