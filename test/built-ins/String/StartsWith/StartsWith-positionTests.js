// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with different values of position
es6id: 21.1.3.18
---*/

var str = "sample";
var searchStr = "sam";

assert.notSameValue(str.startsWith(searchStr, -0), false);
assert.notSameValue(str.startsWith(searchStr, +0), false);
assert.notSameValue(str.startsWith(searchStr, -0.9), false);
assert.notSameValue(str.startsWith(searchStr, +0.9), false);
assert.notSameValue(str.startsWith(searchStr, NaN), false);
assert.notSameValue(str.startsWith(searchStr, -10), false);
assert.notSameValue(str.startsWith(searchStr, -Infinity), false);
assert.notSameValue(str.startsWith(searchStr, null), false);
assert.notSameValue(str.startsWith(searchStr, undefined), false);

