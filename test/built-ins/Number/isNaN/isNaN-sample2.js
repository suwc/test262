// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing isNaN on sample values.
es6id: 20.1.2.4
---*/

assert.sameValue(Number.isNaN(new Number(-.3)), false);
assert.sameValue(Number.isNaN("NaN"), false);
assert.sameValue(Number.isNaN(new Uint16Array()), false);
assert.sameValue(Number.isNaN(new Object()), false);
assert.sameValue(Number.isNaN(new String("NaN")), false);

