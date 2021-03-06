// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-7
description: >
    Array.prototype.lastIndexOf - element to be retrieved is inherited
    data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Array.prototype[0] = true;
            Array.prototype[1] = false;
            Array.prototype[2] = "true";
            return 0 === [, , , ].lastIndexOf(true) &&
                1 === [, , , ].lastIndexOf(false) &&
                2 === [, , , ].lastIndexOf("true");
        } finally {
            delete Array.prototype[0];
            delete Array.prototype[1];
            delete Array.prototype[2];
        }
    }
runTestCase(testcase);
