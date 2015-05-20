// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    It is an error to declare a function parameter and a let statement
    with the same identifier
es6id: 13.3.1
negative: SyntaxError
---*/

function foo(a) {
    let a = 4;
}

foo(5);
