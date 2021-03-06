// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-5
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own data
    property that overrides an inherited accessor property on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return false;
                },
                configurable: true
            });
            return 0 === [Number].lastIndexOf(Number);
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
