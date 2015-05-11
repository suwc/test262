// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: length property of Map constructor
includes: [runTestCase.js]
es6id: 23.1
---*/

function testcase() {
    return Map.constructor.length === 1;
};
runTestCase(testcase);
