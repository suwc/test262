// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Number.parseFloat with sample values.
es6id: 18.2.4
---*/

assert.sameValue(Number.parseFloat(Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY);
assert.sameValue(Number.parseFloat(Number.NEGATIVE_INFINITY), Number.NEGATIVE_INFINITY);
assert.sameValue(Number.parseFloat(NaN), NaN);
assert.sameValue(Number.parseFloat("1.000000001"), 1.000000001);
assert.sameValue(Number.parseFloat(undefined), NaN);
assert.sameValue(Number.parseFloat(null), NaN);
assert.sameValue(Number.parseFloat(true), NaN);
assert.sameValue(Number.parseFloat(false), NaN);
assert.sameValue(Number.parseFloat(new Object(1.01)), 1.01);

