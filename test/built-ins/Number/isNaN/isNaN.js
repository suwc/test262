// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: verifying isNaN on Number instead of Number prototype
es6id: 20.1.2.4
---*/

var num = new Number();
assert.sameValue(num.isNaN, undefined);
assert.sameValue(Object.getOwnPropertyNames(Number.prototype).indexOf("isNaN"), -1);

