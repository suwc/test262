// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype[@@toStringTag] === 'Symbol'
es6id: 19.4.3.5
---*/

if (Symbol.prototype[Symbol.toStringTag] !== 'Symbol') {
    $ERROR("Symbol.prototype[Symbol.toStringTag] !== 'Symbol'");
}
