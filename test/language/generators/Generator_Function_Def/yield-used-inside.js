// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: yield can be used inside a function
flags: [noStrict]
es6id: 14.4
---*/

function foo() {
    yield = 1
}
foo();
