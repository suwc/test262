// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    It should be an error to redeclare a let statement by a var
    statement with the same identifier from an eval inside a function
es6id: 13.3.1
negative: Test262Error
---*/

try {
    function testcase() {
        function fn(){
            eval("var x = 1;")
            let x;
        }
        fn();
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
