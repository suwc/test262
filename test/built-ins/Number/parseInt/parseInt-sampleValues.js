// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Number.parseInt with sample values.
es6id: 18.2.5
---*/

assert.sameValue(Number.parseInt(Number.POSITIVE_INFINITY), NaN);
assert.sameValue(Number.parseInt(Number.NEGATIVE_INFINITY), NaN);
assert.sameValue(Number.parseInt(NaN), NaN);
assert.sameValue(Number.parseInt("1"), 1);
assert.sameValue(Number.parseInt(undefined), NaN);
assert.sameValue(Number.parseInt(null), NaN);
assert.sameValue(Number.parseInt(true), NaN);
assert.sameValue(Number.parseInt(false), NaN);
assert.sameValue(Number.parseInt(new Object(1)), 1);

