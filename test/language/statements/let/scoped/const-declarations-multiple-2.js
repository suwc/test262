// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Const declarations can have multiple bindings in a single statement
es6id: 13.3.1
---*/

try {
    function testcase() {
       const x = 1, y = 2;
       if (x !== 1 || y !== 2)
           $ERROR("Testcase returned an unexpected value");
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
