// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Const assignments are not just static values but can be expressions
es6id: 13.3.1
---*/

const x = 1 + 2;
if (x !== 3)
    $ERROR("Testcase returned an unexpected value");
