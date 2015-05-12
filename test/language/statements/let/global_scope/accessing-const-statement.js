// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Accessing a const statement from the outer scope is an error
es6id: 13.3.1
---*/

try {
    {
        const x = 1;
    }
    x++;
    $ERROR("Testcase returned an unexpected value");
} catch(e) {
    if (e === undefined || e.name !== "ReferenceError")
        $ERROR(e.message)
}
