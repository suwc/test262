// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-i-14
description: >
    Array.prototype.reduce - element to be retrieved is own accessor
    property that overrides an inherited accessor property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;
        var initialValue = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (curVal === "11");
            }
        }

        try {
            Object.defineProperty(Array.prototype, "1", {
                get: function () {
                    return 1;
                },
                configurable: true
            });

            var arr = [0, ,2];

            Object.defineProperty(arr, "1", {
                get: function () {
                    return "11";
                },
                configurable: true
            });
            arr.reduce(callbackfn, initialValue);
            return testResult;

        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
