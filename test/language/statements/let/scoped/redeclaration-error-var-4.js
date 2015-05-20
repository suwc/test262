// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    It's a redeclaration error to have a var statement followed by a
    const statement inside a function with the same identifier
es6id: 13.3.1
negative: SyntaxError
---*/

function testcase() {
    function foo() {
        var x;
        const x = 4;
    }
    foo();
}
testcase();
