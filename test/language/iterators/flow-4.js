// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: flow-4.js
includes: [compareArray.js]
es6id: 25.1
---*/

var test = [];

loop1:
for (i of [1,2,3]) {
    continue;
    test.push(i);
}

if (!compareArray(test, [])) {
    $ERROR('array test is not equal to []');
}
