// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-i-19
description: >
    Array.prototype.map - element to be retrieved is own accessor
    property without a get function that overrides an inherited
    accessor property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return typeof val === "undefined";
            }
            return false;
        }

        var arr = [];

        try {
            Object.defineProperty(arr, "0", {
                set: function () { },
                configurable: true
            });

            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return 100;
                },
                configurable: true
            });

            var testResult = arr.map(callbackfn);

            return testResult[0] === true;
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
