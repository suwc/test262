// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.5 - WeakSet.prototype.has - 3.    If S does not have a
    [[WeakSetData]] internal slot throw a TypeError exception.
es6id: 23.4.3.4
---*/

var error;
var obj = {}

try {
    WeakSet.prototype.has.call(obj);
} catch(e) {
    error = e;
}

if (!(error instanceof TypeError))
    $ERROR("TypeError Expected");
