// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Number.isFinite with sample values.
es6id: 20.1.2.2
---*/

assert.sameValue(Number.isFinite(Number.MAX_VALUE * 1.00001), false);
assert.sameValue(Number.isFinite(-0.0), true);
assert.sameValue(Number.isFinite(+0.0), true);
assert.sameValue(Number.isFinite(0xFFFFF), true);
assert.sameValue(Number.isFinite(003), true);

