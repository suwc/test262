// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Constructor of Prototype of Map
includes: [runTestCase.js]
es6id: 23.1
---*/

function testcase() {
    return Map.prototype.constructor === Map;
};
runTestCase(testcase);
