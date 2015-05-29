// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: malformed-1-4.js
es6id: 25.1
---*/

var iterator = {
    [Symbol.iterator]: function() {
        return 0;
    }
};
var error;

try {
    for (result of iterator) {}
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected to throw an error but no error was thrown');
} else if (error.name !== 'TypeError') {
    $ERROR('expected to have TypeError got ' + error.name + ' instead');
}
