// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-6
description: >
    Array.prototype.filter - element to be retrieved is own data
    property that overrides an inherited accessor property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return val === 11;
        }

        try {
            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return 9;
                },
                configurable: true
            });
            var newArr = [11].filter(callbackfn);

            return newArr.length === 1 && newArr[0] === 11;
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
