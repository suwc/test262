// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-b-13
description: >
    Array.prototype.reduce - deleting own property with prototype
    property in step 8 causes prototype index property to be visited
    on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;

        function callbackfn(accum, val, idx, obj) {
            if (idx === 1 && val === 1) {
                testResult = true;
            }
        }
        var arr = [0, 111];

        Object.defineProperty(arr, "0", {
            get: function () {
                delete arr[1];
                return 0;
            },
            configurable: true
        });

        try {
            Array.prototype[1] = 1;
            arr.reduce(callbackfn);
            return testResult;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
