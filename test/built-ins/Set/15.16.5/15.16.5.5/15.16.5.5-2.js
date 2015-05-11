// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Set.prototype.forEach should throw TypeError if callbackfn is
    undefined
includes: [runTestCase.js]
es6id: 23.2
---*/

function testcase() {
    try {
        var set = new Set();
        Set.prototype.forEach.call(set);
    } catch (e) {
        if (e instanceof TypeError) return true;
    }
    return false;
};
runTestCase(testcase);
