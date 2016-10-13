var MongoClient = require('mongodb').MongoClient;

var mongoURI = 'mongodb://ec2-54-175-174-41.compute-1.amazonaws.com:80/'
var db_name = "5117-individual"
var db_user = "5117user"
var db_pswd = "5117pass"

module.exports = {}

MongoClient.connect(mongoURI + db_name, function(err, db) {
  if (err) {
    throw err;
  }
  db.authenticate(db_user, db_pswd, function(err, result) {
    if (err) {
      throw err;
    }
    module.exports.db = db
  })
})
