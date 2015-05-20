// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Having a var declaration inside an eval in a block and a const
    declaration on the outer-scope will give an error  if they share
    the same identifier name
es6id: 13.3.1
negative: CustomError
---*/

try {
    function testcase() {
        const x = 1;
        {
            eval("var x = 2;");
        }
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
