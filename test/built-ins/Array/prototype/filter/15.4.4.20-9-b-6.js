// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-b-6
description: >
    Array.prototype.filter - properties can be added to prototype
    after current position are visited on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return true;
        }
        var obj = { length: 2 };

        try {
            Object.defineProperty(obj, "0", {
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

            var newArr = Array.prototype.filter.call(obj, callbackfn);

            return newArr.length === 2 && Array[1] === 6.99;
        } finally {
            delete Object.prototype[1];
        }
    }
runTestCase(testcase);
