// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: map-1-3.js
includes: [compareArray.js]
es6id: 23.1.5
---*/

var test = [];
var map = new Map();

map.set(1, "black");
map.set("colors", 2);

for (result of map.keys()) {
    test.push(result);
}

if (!compareArray(test, [1, "colors"])) {
    $ERROR('array test is not equal to [1,"colors"]');
}
