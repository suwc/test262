// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.keyFor(sym) returns the key which was passed to Symbol.for(key)
es6id: 19.4.2.5
---*/

var sym = Symbol.for('key');
var key = Symbol.keyFor(sym);

if (key !== 'key') {
    $ERROR("key !== 'key'");
}
