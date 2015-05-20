// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    It should be an redeclaration error to have a var statement which
    hoists from a block  to a scope where there is a let statement
    with the same identifier
es6id: 13.3.1
negative: SyntaxError
---*/

function testcase() {
    let x = 1;
    {
        var x = 1;
    }
}
testcase();
