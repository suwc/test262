// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: array-manual-1.js
includes: [compareArray.js]
es6id: 22.1.5
---*/

var test = [];
var done = false;
var iterator = Array.prototype[Symbol.iterator].call([1,2,3]);

while (!done) {
    var iteratorResult = iterator.next();
    if (iteratorResult.done) {
        done = true;
        continue;
    }
    test.push(iteratorResult.value);
}

if (!compareArray(test, [1,2,3])) {
    $ERROR('array test is not equal to [1,2,3]');
}
