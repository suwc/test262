// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-34-s
description: >
    Strict Mode - checking 'this' (FunctionExpression defined within
    an Anonymous FunctionExpression inside strict mode)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
return (function () {
    var f = function () {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
})();
}
runTestCase(testcase);
