var fs = require('fs')

var readCallback = function(err, data) {
  // If an error occurred, handle it (throw, propagate, etc)
  if(err) {
    throw err;
    // console.log('Unknown Error: %s', err);
    // return;
  }
  // Otherwise, log the file contents
  console.log(data);
}

fs.readFile('./foo.txt', 'utf-8', readCallback);
fs.readFile(__dirname + '/../README.md', 'utf-8', readCallback);
