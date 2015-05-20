// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    const statements must be inside a block when used in else
    statements
es6id: 13.3.1
negative: SyntaxError
---*/

function testcase() {
    if (false) {} else const x = 1;
};
testcase();
