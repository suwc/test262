// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: atat-iterator-1-10.js
es6id: 25.1
---*/

if (!Float32Array.prototype[Symbol.iterator]) {
    $ERROR("expected Float32Array prototype to have an iterator");
} else if (Float32Array.prototype[Symbol.iterator] !== Float32Array.prototype.values) {
    $ERROR("expected Float32Array prototypes Symbol.iterator to equal values");
}
