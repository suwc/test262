// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: eval should throw assign to const error
es6id: 13.3.1
negative: ReferenceError
---*/

function testcase() {
    {
        const f = 3;
        if (f !== 3)
            $ERROR("Unexpected f value. Expecting 3, got " + f)
        eval("function f() { }");
    }
}
testcase();
