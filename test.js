/**
 * Module dependencies.
 */
var test = require('tape');
var http = require('http');

var serverUrl = require('./');

test('throw if incorrect input is provided', function(t) {
  t.plan(2)
  t.throws(serverUrl, /"undefined" == "object"/)
  t.throws(serverUrl.bind(null, {}), /server.address should exist/)
  t.end()
});

test('return a server url', function(t) {
  t.plan(1)
  var nw = http.createServer().listen(1337)
  t.equals(serverUrl(nw), 'http://0.0.0.0:1337')
  nw.close()
  t.end()
})
