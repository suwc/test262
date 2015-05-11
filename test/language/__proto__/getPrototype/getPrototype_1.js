// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: GetPrototypeof
includes: [runTestCase.js]
es6id: B.3.1
---*/

function testcase() {

    var obj = {};
    Object.setPrototypeOf(obj, {x:2});
    var proto = Object.getPrototypeOf(obj)
    return proto.x === 2;

}
runTestCase(testcase);
