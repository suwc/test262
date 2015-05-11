// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: invalid-date.js
es6id: 25.1
---*/

var error;
var testResult;
var test = {
    get method() {
        testResult = 'fail';
        return null;
    }
}

try {
    for (test.method of Date) {
        test.method;
    }
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected to throw an error but no error was thrown');
} else if (error.name !== 'TypeError') {
    $ERROR('expected to have TypeError, got ' + error.name + ' instead');
} else if (testResult !== undefined) {
    $ERROR('expected testResult to have value undefined, got ' + testResult + 'instead');
}
