// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    It should be an error to make an assignment to a let statement
    before it's initialized on the global scope
es6id: 13.3.1
negative: ReferenceError
---*/

function testcase() {
    x++;
    let x = 1;
}
testcase();
