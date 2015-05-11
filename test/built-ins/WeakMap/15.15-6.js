// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Prototype of WeakMap if Function
includes: [runTestCase.js]
es6id: 23.3.1
---*/

function testcase() {
    return WeakMap.__proto__ === Function.__proto__;
};
runTestCase(testcase);
