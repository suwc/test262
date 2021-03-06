// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-b-15
description: >
    Array.prototype.filter - decreasing length of array with prototype
    property causes prototype index property to be visited
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return true;
        }
        var arr = [0, 1, 2];

        try {
            Object.defineProperty(Array.prototype, "2", {
                get: function () {
                    return "prototype";
                },
                configurable: true
            });

            Object.defineProperty(arr, "1", {
                get: function () {
                    arr.length = 2;
                    return 1;
                },
                configurable: true
            });

            var newArr = arr.filter(callbackfn);

            return newArr.length === 3 && newArr[2] === "prototype";
        } finally {
            delete Array.prototype[2];
        }
    }
runTestCase(testcase);
