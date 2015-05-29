// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: redecl-3.js
es6id: 25.1
---*/

var error;

try {
    eval('for (const test of [1,2,3]) { var test = 1; };');
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected to throw an error but no error was thrown');
} else if (error.name !== 'SyntaxError') {
    $ERROR('expected to have SyntaxError, got ' + error.name + ' instead');
}
