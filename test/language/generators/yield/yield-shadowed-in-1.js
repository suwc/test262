// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Yield should not be shadowed in a with block when inside a
    generator
flags: [noStrict]
es6id: 14.4.14
---*/

var obj = {
    yield: 1
}
function *gfoo() {
    with (obj){
        yield 2
    }
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 2 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 2, done: false}');
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
