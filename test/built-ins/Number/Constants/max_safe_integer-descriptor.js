// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Math.trunc
includes: 
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
es6id: 20.1.2.6
---*/

function testcase() {                        // obj,name,value,writable,enumerable,configurable
    return dataPropertyAttributesAreCorrect(Number, "MAX_SAFE_INTEGER", 9007199254740991, false, false, false);
}
runTestCase(testcase);
