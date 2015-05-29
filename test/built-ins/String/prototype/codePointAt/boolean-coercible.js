// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Boolean should be coercible
es6id: 21.1.3.3
---*/

Boolean.prototype.codePointAt = String.prototype.codePointAt;
var x = true;
assert.sameValue(x.codePointAt(0), 116, "Expected Boolean to be coercible");

