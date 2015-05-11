// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Const statements will shadow object properties when used in with
    statement
es6id: 13.3.1
---*/

try {
    function testcase() {
        var result;

        const a = 1;
        with({a:2}) {
            a++;
            result = a;
        }
        if (result !== 3)
            $ERROR("Testcase returned an unexpected value");
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
