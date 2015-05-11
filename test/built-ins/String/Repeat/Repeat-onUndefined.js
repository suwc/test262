// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat on undefined
includes: [runTestCase.js]
es6id: 21.1.3.13
---*/

function testcase() {
    try {
        String.prototype.repeat.call(undefined, 0);
        return false;
    }
    catch (e) {
        return true;
    }
}
runTestCase(testcase);
