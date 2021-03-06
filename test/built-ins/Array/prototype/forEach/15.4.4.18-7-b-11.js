// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-b-11
description: >
    Array.prototype.forEach - deleting property of prototype causes
    prototype index property not to be visited on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var testResult = true;

        function callbackfn(val, idx, obj) {
            accessed = true;
            if (idx === 1) {
                testResult = false;
            }
        }

        var arr = [0, , ];

        Object.defineProperty(arr, "0", {
            get: function () {
                delete Array.prototype[1];
                return 0;
            },
            configurable: true
        });

        try {
            Array.prototype[1] = 1;
            arr.forEach(callbackfn);
            return testResult && accessed;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
