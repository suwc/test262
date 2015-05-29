// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: string-1-7.js
includes: [compareArray.js]
es6id: 21.1.5
---*/

var string = "";
var test = [];

for (result of string) {
    test.push(result);
}

if (!compareArray(test, [])) {
    $ERROR('array test is not equal to []');
}
