// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Function and the rest parameter has the same name
es6id: 14.1
---*/

function foo(foo = 10, ...a) {
    if (foo !== 10) {
        $ERROR("foo is expected to be 10, but got " + foo);
    }
}

foo(10, 20, 30, 40);
