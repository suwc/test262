// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Having a let declaration and an eval statement that assigns before
    initialization is an error
es6id: 13.3.1
negative: CustomError
---*/

try {
    function testcase() {
        eval("x++;");
        let x = 0;
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
