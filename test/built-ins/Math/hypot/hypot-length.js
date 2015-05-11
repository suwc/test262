// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing length property of Math.hypot
includes: [runTestCase.js]
es6id: 20.2.2.18
---*/

function testcase() {
    return Math.hypot.length === 2;
}
runTestCase(testcase);
