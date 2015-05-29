// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: array-1-3.js
includes: [compareArray.js]
es6id: 22.1.5
---*/

var test = [];
var arr = [1,2,3];

for (result of arr.keys()) {
    test.push(result);
}

if (!compareArray(test, [0,1,2])) {
    $ERROR('array test is not equal to [0,1,2]');
}
