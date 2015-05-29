// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: int32array-4.js
includes: [compareArray.js]
es6id: 22.2
---*/

var test = [];
var arr = new Int32Array([1,2,3]);

for (result of arr.values()) {
    test.push(result);
}

if (!compareArray(test, [1,2,3])) {
    $ERROR('array test is not equal to [1,2,3]');
}
