// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Declaring a let statement in the global scope and redeclaring it
    as a var statement inside an eval should fail
es6id: 13.3.1
negative: ReferenceError
---*/

let x = 1;
eval("var x = 4;")
