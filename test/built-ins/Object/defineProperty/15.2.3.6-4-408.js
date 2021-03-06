// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-408
description: >
    ES5 Attributes - Successfully add a property to an object when the
    object's prototype has a property with same name and [[Writable]]
    attribute is set to true (Date instance)
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.defineProperty(Date.prototype, "prop", {
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            });
            var dateObj = new Date();
            dateObj.prop = 1002;

            return dateObj.hasOwnProperty("prop") && dateObj.prop === 1002;
        } finally {
            delete Date.prototype.prop;
        }
    }
runTestCase(testcase);
