// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: yield ArrowFunction
es6id: 14.4.14
---*/

function *gfoo() {
    yield () => {return "I am arrow"}
}
var iter = gfoo();
var result = iter.next();
if(result.value() !== "I am arrow")
    $ERROR('Arrow Function yield failed');
