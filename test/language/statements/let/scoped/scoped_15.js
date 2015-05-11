// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Const statements are read-only
flags: [negative]
es6id: 13.3.1
---*/

function testcase() {
    const x = 1;
    x++;
}
testcase();
