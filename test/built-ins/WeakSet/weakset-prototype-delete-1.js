// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.4 - WeakSet.prototype.delete - 2. If Type(S) is not Object,
    then throw a TypeError exception
es6id: 23.4.3.3
---*/

var error;

try {
    WeakSet.prototype.delete.call(null);
} catch(e) {
    error = e;
}

if (!(error instanceof TypeError))
    $ERROR("TypeError Expected");
