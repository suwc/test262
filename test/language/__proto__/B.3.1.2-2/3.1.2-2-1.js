// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    set Assign Object.prototype.__proto__ = {} results in Cyclic
    assignment
includes: [runTestCase.js]
es6id: B.3.1
---*/

function testcase() {
    try {
        Object.prototype.__proto__ = {};
    } catch (e) {
        if (e instanceof TypeError) {
            return true;
        }
    }
    return false;
};

runTestCase(testcase);
