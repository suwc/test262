// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Verification of CreateIterResultObject
es6id: 14.4.14
---*/

var gfoo = function *() {}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
