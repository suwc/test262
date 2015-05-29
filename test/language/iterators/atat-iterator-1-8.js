// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: atat-iterator-1-8.js
es6id: 25.1
---*/

if (!Int32Array.prototype[Symbol.iterator]) {
    $ERROR("expected Int32Array prototype to have an iterator");
} else if (Int32Array.prototype[Symbol.iterator] !== Int32Array.prototype.values) {
    $ERROR("expected Int32Array prototypes Symbol.iterator to equal values");
}
