// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-b-12
description: >
    Array.prototype.forEach - deleting own property with prototype
    property causes prototype index property to be visited on an
    Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;

        function callbackfn(val, idx, obj) {
            if (idx === 1 && val === 1) {
                testResult = true;
            }
        }

        var obj = { 0: 0, 1: 111, length: 10 };

        Object.defineProperty(obj, "0", {
            get: function () {
                delete obj[1];
                return 0;
            },
            configurable: true
        });

        try {
            Object.prototype[1] = 1;
            Array.prototype.forEach.call(obj, callbackfn);
            return testResult;
        } finally {
            delete Object.prototype[1];
        }
    }
runTestCase(testcase);
