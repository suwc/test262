// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-619
description: >
    ES5 Attributes - all attributes in Array.prototype.reduce are
    correct
includes: [runTestCase.js]
---*/

function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Array.prototype, "reduce");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Array.prototype.reduce;

        try {
            Array.prototype.reduce = "2010";

            var isWritable = (Array.prototype.reduce === "2010");

            var isEnumerable = false;

            for (var prop in Array.prototype) {
                if (prop === "reduce") {
                    isEnumerable = true;
                }
            }

            delete Array.prototype.reduce;

            var isConfigurable = !Array.prototype.hasOwnProperty("reduce");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Array.prototype, "reduce", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);
