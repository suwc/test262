// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-165-1
description: >
    Object.defineProperty - 'Attributes' is a Function object which
    implements its own [[Get]] method to access the 'writable'
    property of prototype object (8.10.5 step 6.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        try {
            Function.prototype.writable = true;
            var funObj = function (a, b) {
                return a + b;
            };

            Object.defineProperty(obj, "property", funObj);

            var beforeWrite = obj.hasOwnProperty("property");

            obj.property = "isWritable";

            var afterWrite = (obj.property === "isWritable");

            return beforeWrite === true && afterWrite === true;
        } finally {
            delete Function.prototype.writable;
        }
    }
runTestCase(testcase);
