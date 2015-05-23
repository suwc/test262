// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Number.isFinite with sample values.
es6id: 20.1.2.2
---*/

assert.sameValue(Number.isFinite(Number.POSITIVE_INFINITY), false);
assert.sameValue(Number.isFinite(Number.NEGATIVE_INFINITY), false);
assert.sameValue(Number.isFinite(NaN), false);
assert.sameValue(Number.isFinite("1"), false);
assert.sameValue(Number.isFinite(undefined), false);
assert.sameValue(Number.isFinite(null), false);
assert.sameValue(Number.isFinite(true), false);
assert.sameValue(Number.isFinite(false), false);
assert.sameValue(Number.isFinite(new Object(1)), false);

