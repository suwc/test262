// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-b-6
description: >
    Array.prototype.reduceRight - properties added to prototype in
    step 8 visited on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;

        function callbackfn(preVal, curVal, idx, obj) {
            if (idx === 1 && curVal === 6.99) {
                testResult = true;
            }
        }

        var obj = { length: 6 };

        Object.defineProperty(obj, "2", {
            get: function () {
                Object.defineProperty(Object.prototype, "1", {
                    get: function () {
                        return 6.99;
                    },
                    configurable: true
                });
                return 0;
            },
            configurable: true
        });

        try {
            Array.prototype.reduceRight.call(obj, callbackfn);
            return testResult;
        } finally {
            delete Object.prototype[1];
        }
    }
runTestCase(testcase);
