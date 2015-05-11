// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Map.prototype.forEach should throw TypeError if callbackfn is
    undefined
includes: [runTestCase.js]
es6id: 23.1
---*/

function testcase() {
    try {
        var map = new Map();
        Map.prototype.forEach.call(map);
    } catch (e) {
        if (e instanceof TypeError) return true;
    }
    return false;
};
runTestCase(testcase);
