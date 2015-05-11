// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Redeclaration is not allowed for const and var statements
flags: [negative]
es6id: 13.3.1
---*/

function testcase() {
    const x = 1;
    var x = 1;
}
testcase();
