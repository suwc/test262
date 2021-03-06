// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-2-12
description: >
    Array.prototype.every - 'length' is own accessor property without
    a get function that overrides an inherited accessor property
includes: [runTestCase.js]
---*/

function testcase() {
        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return val > 10;
        }

        try {
            Object.defineProperty(Object.prototype, "length", {
                get: function () {
                    return 2;
                },
                configurable: true
            });

            var obj = { 0: 9, 1: 8 };
            Object.defineProperty(obj, "length", {
                set: function () { },
                configurable: true
            });

            return Array.prototype.every.call(obj, callbackfn) && !accessed;
        } finally {
            delete Object.prototype.length;
        }

    }
runTestCase(testcase);
