// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: uint32array-iterator-1.js
es6id: 22.2
---*/

var error;

try {
    for (result of Uint32Array.prototype[Symbol.iterator].call(undefined)) { }
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected iteration to throw an error but it did not');
} else if (error.name !== 'TypeError') {
    $ERROR('expected to have TypeError got ' + error.name + ' instead');
}
