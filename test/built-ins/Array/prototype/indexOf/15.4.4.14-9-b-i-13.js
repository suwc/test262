// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-i-13
description: >
    Array.prototype.indexOf - element to be retrieved is own accessor
    property that overrides an inherited accessor property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [];
        try {
            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return false;
                },
                configurable: true
            });

            Object.defineProperty(arr, "0", {
                get: function () {
                    return true;
                },
                configurable: true
            });

            return 0 === arr.indexOf(true);
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
