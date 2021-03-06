// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-88-1
description: >
    Object.defineProperty - 'Attributes' is a String object that uses
    Object's [[Get]] method to access the 'configurable' property
    (8.10.5 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        try {
            String.prototype.configurable = true;
            var strObj = new String("abc");

            Object.defineProperty(obj, "property", strObj);

            var beforeDeleted = obj.hasOwnProperty("property");

            delete obj.property;

            var afterDeleted = obj.hasOwnProperty("property");

            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete String.prototype.configurable;
        }
    }
runTestCase(testcase);
