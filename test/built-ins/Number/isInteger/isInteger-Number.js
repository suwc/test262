// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: isInteger is on Number and not on Number.prototype
includes: [runTestCase.js]
es6id: 20.1.2.3
---*/

function testcase() {
    try {
        return Object.getOwnPropertyNames(Number.prototype).indexOf("isInteger") === -1;
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);
