// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Redeclaration is not allowed for const statements
es6id: 13.3.1
negative: SyntaxError
---*/

function testcase() {
    const x = 1;
    const x = 2;
}
testcase();
