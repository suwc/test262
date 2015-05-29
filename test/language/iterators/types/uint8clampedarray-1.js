// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: uint8clampedarray-1.js
includes: [compareArray.js]
es6id: 22.2
---*/

var test = [];
var arr = new Uint8ClampedArray([1,2,3]);

for (result of arr) {
    test.push(result);
}

if (!compareArray(test, [1,2,3])) {
    $ERROR('array test is not equal to [1,2,3]');
}
