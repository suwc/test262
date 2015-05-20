// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Inside a function, it is an error to have a const statement inside
    an eval call and to have an assignment to that const variable
    before the eval call
es6id: 13.3.1
negative: CustomError
---*/

try {
    function testcase() {
        function fn(){
            x++;
            eval("const x = 1;")
        }
        fn();
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
