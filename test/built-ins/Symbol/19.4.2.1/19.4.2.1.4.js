// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.for(key) returns a symbol with [[Description]] set to key
es6id: 19.4.2.1
---*/

var key = 'key';
var sym = Symbol.for(key);

if (sym.toString() !== 'Symbol(key)') {
    $ERROR("sym.toString() !== 'Symbol(key)'");
}
