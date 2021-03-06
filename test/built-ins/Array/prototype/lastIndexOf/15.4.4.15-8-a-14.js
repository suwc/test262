// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-a-14
description: >
    Array.prototype.lastIndexOf -  deleting property of prototype
    causes prototype index property not to be visited on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, , 2];

        Object.defineProperty(arr, "20", {
            get: function () {
                delete Array.prototype[1];
                return 0;
            },
            configurable: true
        });

        try {
            Array.prototype[1] = 1;
            return -1 === arr.lastIndexOf(1);
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
