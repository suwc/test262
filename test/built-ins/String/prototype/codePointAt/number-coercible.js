// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Number should be coercible
es6id: 21.1.3.3
---*/

Number.prototype.codePointAt = String.prototype.codePointAt;
var x = 1;
assert.sameValue(x.codePointAt(0), 49, "Expected Number to be coercible");

