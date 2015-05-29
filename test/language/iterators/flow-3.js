// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: flow-3.js
includes: [compareArray.js]
es6id: 25.1
---*/

var test = [];

loop1:
for (i of [1,2,3]) {
    test.push(i);
    break;
}

if (!compareArray(test, [1])) {
    $ERROR('array test is not equal to [1]');
}
