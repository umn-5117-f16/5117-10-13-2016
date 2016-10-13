
// functions

function e () {
  console.log('running e')
}

var f = function() {
  console.log('running f')
}

var g = function g () {
  console.log('running g')
}

var h = {
  i: function() {
    console.log('running h.i')
  }
}

e()
f()
g()
h.i()

// arguments

var j = function(arg) {
  console.log('j, arg: %s', arg)
}

var k = function(arg, missingArg) {
  console.log('k, arg: %s, missingArg: %s', arg, missingArg)
}

var l = function() {
  console.log('l, args: %s, %s, %s', arguments[0], arguments[1], arguments[2])
}

j('foo')
k('foo')
l('foo', 'bar', 'baz')

// objects

var o = {
  foo: 'bar',
  'needs-quotes': 44,
  nested: {
    nested: {
      indentation:
                         'does not matter',
      nested: {
        // empty object
      }
    },
    ary: [1, 2, 'string!', true, ['more arrays', [3, 4, 5, 6]]]
  }
}

console.log('foo is %s', o.foo)
console.log('indentation %s', o.nested.nested.indentation)
console.log('array %s', o.nested.ary[4][1][2])
