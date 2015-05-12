// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap Constructor called as function. thisArg is null
includes: [runTestCase.js]
es6id: 23.3.2
---*/

function testcase() {

    try{
        var map = WeakMap.call(null);
    } catch (e) {
        if (!(e instanceof TypeError))
            return false;
    }
    return true;

};
runTestCase(testcase);
