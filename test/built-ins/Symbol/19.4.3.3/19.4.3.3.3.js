// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype.valueOf throws TypeError if the this argument is not a Symbol wrapper object
es6id: 19.4.3.3
---*/

try {
    Symbol.prototype.valueOf.call({});

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR("Unexpected error type was thrown " + e);
    }
}
