// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-i-16
description: >
    Array.prototype.map - element to be retrieved is inherited
    accessor property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var kValue = "abc";

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return val === kValue;
            }
            return false;
        }

        try {
            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return kValue;
                },
                configurable: true
            });

            var testResult = [, ].map(callbackfn);

            return testResult[0] === true;
        } finally {
            delete Array.prototype[0];
        }


    }
runTestCase(testcase);
