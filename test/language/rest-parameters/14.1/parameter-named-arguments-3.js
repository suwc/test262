// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: A parameter is named arguments
es6id: 14.1
---*/

function foo(a, b = 20, arguments) {
    if (arguments !== undefined) {
        $ERROR("Third argument is expected to have the value undefined");
    }
}

foo(10);
