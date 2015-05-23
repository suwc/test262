// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Checking the length of Number.isNaN
es6id: 20.1.2.4
---*/

assert.sameValue(Number.isNaN(NaN), true);
assert.sameValue(Number.isNaN(true), false);
assert.sameValue(Number.isNaN(false), false);
assert.sameValue(Number.isNaN(undefined), false);
assert.sameValue(Number.isNaN(null), false);
assert.sameValue(Number.isNaN(Number.POSITIVE_INFINITY), false);
assert.sameValue(Number.isNaN(+0), false);
assert.sameValue(Number.isNaN(-0), false);

