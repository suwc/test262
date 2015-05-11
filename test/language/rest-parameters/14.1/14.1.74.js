// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Combination of rest and default
---*/

var expectedArray = [1, 2, 3];
function foo(a, b = 10, ...args) {
    if (a !== 1) {
        $ERROR("First argument is expected to be 1");
    }
    if (b !== 10) {
        $ERROR("Second argument is expected to be 10");
    }
    if (args.length !== 0) {
        $ERROR("The rest argument is expected to have length 0");
    }
}

foo(1);
