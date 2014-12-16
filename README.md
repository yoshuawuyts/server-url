# server-url
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Retrieve the url a server is listening on.

## Installation
```bash
npm install server-url
```

## Usage
```js
var serverUrl = require('server-url')
var http = require('http')

var server = http.createServer()
var url = serverUrl(http.listen())
// => `http://0.0.0.0.0:1337`
```

## Why?
Retrieving a server url is a bit verbose. This makes it easier.

## See Also
- [node::http](http://nodejs.org/api/http.html)
- [servertest](https://github.com/rvagg/servertest)
- [NodeJS: How to get the server's port?](http://stackoverflow.com/questions/4840879/nodejs-how-to-get-the-servers-port)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/server-url.svg?style=flat-square
[npm-url]: https://npmjs.org/package/server-url
[travis-image]: https://img.shields.io/travis/yoshuawuyts/server-url.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/server-url
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/server-url.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/server-url?branch=master
[downloads-image]: http://img.shields.io/npm/dm/server-url.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/server-url
