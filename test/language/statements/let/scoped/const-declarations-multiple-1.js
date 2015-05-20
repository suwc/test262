// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Const declarations can have multiple bindings in a single
    statement, but they can't have unassigned values
es6id: 13.3.1
negative: SyntaxError
---*/

function testcase() {
    const x = 1, y;
}
testcase();
