// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-143-1
description: >
    Object.defineProperty - 'Attributes' is a Number object that uses
    Object's [[Get]] method to access the 'value' property of
    prototype object  (8.10.5 step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        try {
            Number.prototype.value = "Number";
            var numObj = new Number(-2);

            Object.defineProperty(obj, "property", numObj);

            return obj.property === "Number";
        } finally {
            delete Number.prototype.value;
        }
    }
runTestCase(testcase);
