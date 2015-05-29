// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: atat-iterator-1-13.js
es6id: 25.1
---*/

if (!Set.prototype[Symbol.iterator]) {
    $ERROR("expected Set prototype to have an iterator");
} else if (Set.prototype[Symbol.iterator] !== Set.prototype.values) {
    $ERROR("expected Set prototypes Symbol.iterator to equal values");
}
