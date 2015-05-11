// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: The initial value of Symbol.prototype.constructor is the intrinsic object %Symbol%
es6id: 19.4.3.1
---*/

if (Symbol.prototype.constructor !== Symbol) {
    $ERROR("Symbol.prototype.constructor !== Symbol");
}
