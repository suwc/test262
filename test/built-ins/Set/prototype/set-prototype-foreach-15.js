// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.forEach verify for empty set
includes: [runTestCase.js]
es6id: 23.2
---*/

function testcase() {
    var called = false;
    var set = new Set();
    var thisArg = {};

    Set.prototype.forEach.call(set, function () {
        called = true;
    }, thisArg);

    return !called;
};
runTestCase(testcase);
