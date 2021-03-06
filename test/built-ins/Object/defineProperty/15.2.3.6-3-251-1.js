// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-251-1
description: >
    Object.defineProperty - 'Attributes' is a Boolean object that uses
    Object's [[Get]] method to access the 'set' property of prototype
    object (8.10.5 step 8.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var data = "data";
        try {
            Boolean.prototype.set = function (value) {
                data = value;
            };
            var boolObj = new Boolean(true);

            Object.defineProperty(obj, "property", boolObj);
            obj.property = "overrideData";

            return obj.hasOwnProperty("property") && data === "overrideData";
        } finally {
            delete Boolean.prototype.set;
        }
    }
runTestCase(testcase);
