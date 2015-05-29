// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Supports values from 0 to 0x10FFFF
es6id: 21.1.2.1
---*/

assert.sameValue(String.fromCodePoint(0), "\u0000",
    "fromCodePoint(0) and \\u0000 should be equal");

