// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: atat-iterator-1-9.js
es6id: 25.1
---*/

if (!Uint32Array.prototype[Symbol.iterator]) {
    $ERROR("expected Uint32Array prototype to have an iterator");
} else if (Uint32Array.prototype[Symbol.iterator] !== Uint32Array.prototype.values) {
    $ERROR("expected Uint32Array prototypes Symbol.iterator to equal values");
}
