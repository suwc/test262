// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-218-1
description: >
    Object.defineProperty - 'Attributes' is a Function object which
    implements its own [[Get]] method to access the 'get' property of
    prototype object (8.10.5 step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        try {
            Function.prototype.get = function () {
                return "functionGetProperty";
            };
            var funObj = function () { };

            Object.defineProperty(obj, "property", funObj);

            return obj.property === "functionGetProperty";
        } finally {
            delete Function.prototype.get;
        }
    }
runTestCase(testcase);
