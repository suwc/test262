// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-2-12
description: >
    Array.prototype.map - applied to the Array-like object when
    'length' is own accessor property without a get function that
    overrides an inherited accessor property
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        try {
            Object.defineProperty(Object.prototype, "length", {
                get: function () {
                    return 2;
                },
                configurable: true
            });

            var obj = { 0: 12, 1: 11 };
            Object.defineProperty(obj, "length", {
                set: function () { },
                configurable: true
            });

            var testResult = Array.prototype.map.call(obj, callbackfn);
            return testResult.length === 0;
        } finally {
            delete Object.prototype.length;
        }
    }
runTestCase(testcase);
