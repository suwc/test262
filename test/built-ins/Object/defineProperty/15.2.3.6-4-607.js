// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-607
description: ES5 Attributes - all attributes in Object.isSealed are correct
includes: [runTestCase.js]
---*/

function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Object, "isSealed");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Object.isSealed;

        try {
            Object.isSealed = "2010";

            var isWritable = (Object.isSealed === "2010");

            var isEnumerable = false;

            for (var prop in Object) {
                if (prop === "isSealed") {
                    isEnumerable = true;
                }
            }
        
            delete Object.isSealed;

            var isConfigurable = !Object.hasOwnProperty("isSealed");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Object, "isSealed", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);
