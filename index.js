/**
 * Module dependencies
 */
var assert = require('assert')

/**
 * Expose `serverUrl`.
 */
module.exports = serverUrl
console.log()
/**
 * Get the server url.
 *
 * @param {Object} server
 * @return {String}
 * @api public
 */
function serverUrl(server) {
  assert.equal(typeof server, 'object')
  assert(server.address, 'server.address should exist');

  var address = server.address();
  var port = address.port;
  return 'http://' + address.address + ':' + port
}
