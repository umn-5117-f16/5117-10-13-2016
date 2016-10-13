
// primitive
var x = 5;

var addX = function(value) {
  return value + x;
};

// expose x and addX
module.exports.x = x;
module.exports.addX = addX;

// // alternatively:
// module.exports = {
//   x: x,
//   addX: addX
// }
