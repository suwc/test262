// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Having a const declaration inside an eval and assigning before
    initialization is an error
es6id: 13.3.1
negative: Test262Error
---*/

try {
    function testcase() {
        x++;
        eval("const x = 0;")
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
