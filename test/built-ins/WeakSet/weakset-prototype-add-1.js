// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.1 - WeakSet.prototype.add - 2. If Type(S) is not Object,
    then throw a TypeError exception
es6id: 23.4.3.1
---*/

var error;
try {
    WeakSet.prototype.add.call(null);
} catch(e) {
    error = e;
}

if (!(error instanceof TypeError))
    $ERROR("TypeError Expected");
