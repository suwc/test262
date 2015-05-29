// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: uint8clampedarray-3.js
includes: [compareArray.js]
es6id: 22.2
---*/

var test = [];
var arr = new Uint8ClampedArray([1,2,3]);

for (result of arr.keys()) {
    test.push(result);
}

if (!compareArray(test, [0,1,2])) {
    $ERROR('array test is not equal to [0,1,2]');
}
