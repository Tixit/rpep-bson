
`rpep-msgpack`
=====

This is a [BSON](http://bsonspec.org/) serialization for [rpep.js](https://github.com/Tixit/rpep.js). RPEP is a simple, light-weight protocol for request-response and stream-event style communication between peers.

Install
=======

```
yarn install rpep-bson
```

Usage
=====

Accessing rpep:
```javascript
// node.js
var rpepBson = require('rpep-bson')

// amd
require.config({paths: {rpepBson: '../dist/rpep-bson.umd.js'}})
require(['rpepBson'], function(rpepBson) { /* your code */ })

// global variable
<script src="rpep-bson.umd.js"></script>
rpepBson; // rpep-bson.umd.js can define rpepBson globally if you really
             //   want to shun module-based design
```

License
=======
Released under the MIT license: http://opensource.org/licenses/MIT