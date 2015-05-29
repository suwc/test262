// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "YieldExpression: Single yield statement"
es6id: 14.4.14
---*/

var gfoo = function *() {
    return yield;
};
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(10);
if(iterresult.value !== 10 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 10, done: true}');
