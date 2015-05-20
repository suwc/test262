// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Using eval as an identifier in strict mode const statements is an
    error
flags: [onlyStrict]
es6id: 13.3.1
negative: SyntaxError
---*/

function testcase() {
    "use strict";
    const eval = 1;
};
testcase();
