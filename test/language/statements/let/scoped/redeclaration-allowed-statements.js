// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Redeclaration is not allowed for let statements
es6id: 13.3.1
negative: SyntaxError
---*/

function testcase() {
    let x = 1;
    let x = 2;
}
testcase();
