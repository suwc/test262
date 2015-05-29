// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Yield in a compound statement
es6id: 14.4.14
---*/

var o = {p:1}
function *gfoo() {
    o.p += yield;
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
o.p = 100; // value is changed in the suspended state
iterresult = iter.next(1);
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
if(o.p !== 2)
    $ERROR('Yield in compound statement failed');
