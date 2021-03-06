// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-16
description: >
    Array.prototype.lastIndexOf - element to be retrieved is inherited
    accessor property on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.defineProperty(Object.prototype, "0", {
                get: function () {
                    return 10;
                },
                configurable: true
            });

            Object.defineProperty(Object.prototype, "1", {
                get: function () {
                    return 20;
                },
                configurable: true
            });

            Object.defineProperty(Object.prototype, "2", {
                get: function () {
                    return 30;
                },
                configurable: true
            });

            return 0 === Array.prototype.lastIndexOf.call({ length: 3 }, 10) &&
                1 === Array.prototype.lastIndexOf.call({ length: 3 }, 20) &&
                2 === Array.prototype.lastIndexOf.call({ length: 3 }, 30);
        } finally {
            delete Object.prototype[0];
            delete Object.prototype[1];
            delete Object.prototype[2];
        }
    }
runTestCase(testcase);
