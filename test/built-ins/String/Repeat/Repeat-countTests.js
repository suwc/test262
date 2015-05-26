// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat trhows with different values of count
es6id: 21.1.3.13
---*/

var str = "sample";
assert.sameValue(str.repeat(-0).length, str.length*Math.floor(Math.abs(-0)),
    "String.prototype.repeat gives incorrect output for: -0");
assert.sameValue(str.repeat(+0).length, str.length*Math.floor(Math.abs(+0)),
    "String.prototype.repeat gives incorrect output for: +0");
assert.sameValue(str.repeat(-0.9).length, str.length*Math.floor(Math.abs(-0.9)),
    "String.prototype.repeat gives incorrect output for: -0.9");
assert.sameValue(str.repeat(+0.9).length, str.length*Math.floor(Math.abs(+0.9)),
    "String.prototype.repeat gives incorrect output for: +0.9");
assert.sameValue(str.repeat(1).length, str.length*Math.floor(Math.abs(1)),
    "String.prototype.repeat gives incorrect output for: 1");
assert.sameValue(str.repeat(3).length, str.length*Math.floor(Math.abs(3)),
    "String.prototype.repeat gives incorrect output for: 3");
assert.sameValue(str.repeat(11).length, str.length*Math.floor(Math.abs(11)),
    "String.prototype.repeat gives incorrect output for: 11");
assert.sameValue(str.repeat(NaN).length, 0,
    "String.prototype.repeat gives incorrect output for: NaN");

