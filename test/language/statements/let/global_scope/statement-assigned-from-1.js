// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    A let statement can't be assigned from a function body before it's
    initialized (temporal dead zone)
es6id: 13.3.1
negative: ReferenceError
---*/

function foo() {
    x++;
}
foo();
let x = 4;
