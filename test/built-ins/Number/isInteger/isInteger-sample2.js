// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing isInteger with sample values
es6id: 20.1.2.3
---*/

assert.notSameValue(Number.isInteger(1.0), false);
assert.notSameValue(Number.isInteger(1.000000000000000000000000001), false);
assert.notSameValue(Number.isInteger(0xFFFFF), false);
assert.notSameValue(Number.isInteger(007), false);
assert.notSameValue(Number.isInteger(Number.MAX_SAFE_INTEGER), false);

