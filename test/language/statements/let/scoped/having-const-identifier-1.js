// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Having const as an identifier is an error because it's a reserved
    keyword
es6id: 13.3.1
negative: SyntaxError
---*/

function testcase() {
    let const = 1;
};
testcase();
