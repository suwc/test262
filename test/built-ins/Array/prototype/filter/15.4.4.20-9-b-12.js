// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-b-12
description: >
    Array.prototype.filter - deleting own property with prototype
    property causes prototype index property to be visited on an
    Array-like object
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return true;
        }
        var obj = { 0: 0, 1: 111, 2: 2, length: 10 };

        Object.defineProperty(obj, "0", {
            get: function () {
                delete obj[1];
                return 0;
            },
            configurable: true
        });

        try {
            Object.prototype[1] = 1;
            var newArr = Array.prototype.filter.call(obj, callbackfn);

            return newArr.length === 3 && newArr[1] === 1;
        } finally {
            delete Object.prototype[1];
        }
    }
runTestCase(testcase);
