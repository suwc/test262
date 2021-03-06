// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-92-1
description: >
    Object.defineProperty - 'Attributes' is a Date object that uses
    Object's [[Get]] method to access the 'configurable' property
    (8.10.5 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        try {
            Date.prototype.configurable = true;
            var dateObj = new Date();

            Object.defineProperty(obj, "property", dateObj);

            var beforeDeleted = obj.hasOwnProperty("property");

            delete obj.property;

            var afterDeleted = obj.hasOwnProperty("property");

            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete Date.prototype.configurable;
        }
    }
runTestCase(testcase);
