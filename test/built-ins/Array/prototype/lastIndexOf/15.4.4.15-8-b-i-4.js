// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-4
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own data
    property that overrides an inherited data property on an
    Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.prototype[0] = false;
            return 0 === Array.prototype.lastIndexOf.call({ 0: true, 1: 1, length: 2 }, true);
        } finally {
            delete Object.prototype[0];
        }
    }
runTestCase(testcase);
