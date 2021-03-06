// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-a-10
description: >
    Array.prototype.indexOf - properties can be added to prototype
    after current position are visited on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, , 2];

        Object.defineProperty(arr, "0", {
            get: function () {
                Object.defineProperty(Array.prototype, "1", {
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
            return arr.indexOf(6.99) === 1;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
