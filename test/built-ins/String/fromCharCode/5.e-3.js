// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: If value is < 0 or value > 0x10FFFF throw RangeError
author: Murat Sutunc
es6id: 21.1.2.1
---*/

if (String.fromCodePoint(0) !== "\u0000") {
    $ERROR("fromCodePoint(0) and \\u0000 should be equal")
}
