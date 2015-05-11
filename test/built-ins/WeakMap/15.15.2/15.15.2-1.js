// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    WeakMap Constructor as Function verfy whether result in instance
    of WeakMap
includes: [runTestCase.js]
es6id: 23.3.2
---*/

function testcase() {
   try{
        var map = WeakMap();
    }catch(e){
        return e instanceof TypeError;
    }
    return false
};
runTestCase(testcase);
