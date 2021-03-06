// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-19-s
description: >
    StrictMode - enumerating over a function object looking for
    'arguments' fails outside of the function
includes: [runTestCase.js]
---*/

function testcase() {
        var foo = Function("'use strict';");
        
        for (var tempIndex in foo) {
            if (tempIndex === "arguments") {
                return false;
            }
        }
        return true;
}
runTestCase(testcase);
