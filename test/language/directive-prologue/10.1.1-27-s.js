// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-27-s
description: >
    Strict Mode - Function code of Accessor PropertyAssignment
    contains Use Strict Directive which appears in the middle of the
    block(getter)
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, "accProperty", {
            get: function () {
                eval("public = 1;");
                "use strict";
                return 11;
            }
        });
        return obj.accProperty === 11 && public === 1;
    }
runTestCase(testcase);
