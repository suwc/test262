// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Get]] for __proto__ using with"
includes: [runTestCase.js]
es6id: B.3.1
---*/

function testcase() {

    with (Object.prototype) {
        return __proto__ === null;
    }

    return false;
}
runTestCase(testcase);
