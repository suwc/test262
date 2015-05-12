// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Constructor of Prototype of WeakMap
includes: [runTestCase.js]
es6id: 23.3.1
---*/

function testcase() {
    return WeakMap.prototype.constructor === WeakMap;
};
runTestCase(testcase);
