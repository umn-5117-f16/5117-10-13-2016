var express = require('express')
var mongo = require('./mongodb-v3-db')

var app = express()
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  mongo.db.collection('max_messages').find().toArray(
    function(err, all_messages){
      res.send({'messages': all_messages})
    }
  )
});

app.listen(3000, function () {
  console.log('listening on port 3000!')
});
