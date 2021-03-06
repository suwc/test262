// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-43-s
description: >
    Strict Mode - checking 'this' (FunctionExpression defined within
    an Anonymous FunctionExpression with a strict directive prologue)
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
return (function () {
    "use strict";
    var f = function () {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
})();
}
runTestCase(testcase);
