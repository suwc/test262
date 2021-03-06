// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.1-4-28-s
description: >
    Strict Mode - SyntaxError is thrown if the identifier 'eval'
    appears as the LeftHandSideExpression of simple assignment(=)
    under strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var blah = eval;
        try {
            eval("var eval = 20;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError && blah === eval;
        }
    }
runTestCase(testcase);
