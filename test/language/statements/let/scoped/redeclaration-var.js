// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
flags: [description]
es6id: 13.3.1
---*/

function testcase() {
    function foo() {
        try {} catch (e) {
            var e = 10;
        }
    }
    foo();
}
testcase();
