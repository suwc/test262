// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: A let statement which is declared in a for-loop doesn't get hoisted
flags: [negative]
es6id: 13.3.1
---*/

for (let i = 1; i > 0; i--) {
    result1 = i;
};
i++;
