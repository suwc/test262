// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: hoist-2-2.js
---*/

var error;

// Verify const decls are not statements
try {
    eval('for (test of undefined) const _test = test;');
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected to throw an error but no error was thrown');
} else if (error.name !== 'SyntaxError') {
    $ERROR('expected to have SyntaxError, got ' + e.name + ' instead');
}
