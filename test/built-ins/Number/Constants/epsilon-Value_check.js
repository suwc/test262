// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: epsilon-Value_check
description: Testing value of Number.EPSILON
es6id: 20.1.2.1
---*/

var smaller = 2.220446049250312 - 16;
assert.notSameValue((1 + smaller) - 1, Number.EPSILON);

