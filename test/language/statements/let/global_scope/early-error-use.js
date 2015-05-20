// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    It's an early error to use the let statement before it's
    declaration
es6id: 13.3.1
negative: ReferenceError
---*/

{
    x++;
}
let x = 1;
