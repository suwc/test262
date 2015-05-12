// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    GeneratorResume: If state is "suspendedstart", then return
    CreateIterResultObject(undefined, true).
author: Nikhil Suryanarayanan
es6id: 25.3.3
---*/

var iter = (function *() {})();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
