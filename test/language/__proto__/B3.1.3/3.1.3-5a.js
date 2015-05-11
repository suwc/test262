// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    __proto__ in Object Initializer in JSON.parse creates own property
    __proto__
includes: [runTestCase.js]
es6id: B.3.1
---*/

function testcase() {
    var obj = JSON.parse('{"x": 1, "__proto__": {"y":2}}')
    return obj.y === undefined && obj.__proto__.y === 2;
}
runTestCase(testcase);
