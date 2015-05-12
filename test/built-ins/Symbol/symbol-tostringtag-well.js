// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.toStringTag is the well known symbol @@toStringTag
es6id: 19.4.2.13
---*/

if (typeof Symbol.toStringTag !== 'symbol') {
    $ERROR("typeof Symbol.toStringTag !== 'symbol'");
}
