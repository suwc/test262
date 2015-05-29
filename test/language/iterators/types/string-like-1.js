// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: string-like-1.js
es6id: 21.1.5
---*/

var error;
var test = {};
test.__proto__ = String.prototype;

try {
    for (result of test) {}
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected iteration to throw an error but it did not');
} else if (error.name !== 'TypeError') {
    $ERROR('expected to have TypeError got ' + error.name + ' instead');
}
