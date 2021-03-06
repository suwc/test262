// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-b-23
description: >
    Array.prototype.reduceRight - deleting property of prototype
    causes deleted index property not to be visited on an Array-like
    Object
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var testResult = true;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            if (idx === 3) {
                testResult = false;
            }
        }

        var obj = { 2: 2, length: 20 };

        Object.defineProperty(obj, "5", {
            get: function () {
                delete Object.prototype[3];
                return 0;
            },
            configurable: true
        });

        try {
            Object.prototype[3] = 1;
            Array.prototype.reduceRight.call(obj, callbackfn, "initialValue");
            return testResult && accessed;
        } finally {
            delete Object.prototype[3];
        }
    }
runTestCase(testcase);
