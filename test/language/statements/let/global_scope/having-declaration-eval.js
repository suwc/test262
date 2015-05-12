// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Having a let declaration and an eval statement that assigns before
    initialization is an error
flags: [negative]
es6id: 13.3.1
---*/

function testcase() {
    eval("x++;");
    let x = 0;
}
testcase();
