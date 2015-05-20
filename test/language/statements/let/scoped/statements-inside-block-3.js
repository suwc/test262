// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Let statements must be inside a block when used in do-while
    statements
es6id: 13.3.1
negative: SyntaxError
---*/

function testcase() {
    do let x = 1; while (false)
};
testcase();
