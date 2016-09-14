/**
 * Module dependencies
 */
var assert = require('assert')
var https = require('https')

/**
 * Expose `serverUrl`.
 */
module.exports = serverUrl

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

  var protocol = 'http' + (server instanceof https.Server ? 's' : '')
  var address = server.address();
  var port = address.port;
  return protocol + '://' + address.address + ':' + port
}
