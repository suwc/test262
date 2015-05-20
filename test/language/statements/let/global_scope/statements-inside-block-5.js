// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    let statements must be inside a block when used in for-loop
    statements
es6id: 13.3.1
negative: SyntaxError
---*/

for (var i = 1; i >= 0; i--) let x = 1;
