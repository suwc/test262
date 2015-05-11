// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: verifying Number.isNaN !== Global isNaN
includes: [runTestCase.js]
es6id: 20.1.2.4
---*/

function testcase() {
    try {
        return Number.isNaN !==isNaN;
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);
