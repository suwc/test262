// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat on special characters
es6id: 21.1.3.13
---*/

var specialVal = "{";
assert.sameValue(String.prototype.repeat.call(specialVal, 1), specialVal,
    "String.prototype.repeat did not work for " + specialVal);

specialVal = "[";
assert.sameValue(String.prototype.repeat.call(specialVal, 1), specialVal,
    "String.prototype.repeat did not work for " + specialVal);

specialVal = "}";
assert.sameValue(String.prototype.repeat.call(specialVal, 1), specialVal,
    "String.prototype.repeat did not work for " + specialVal);

specialVal = "]";
assert.sameValue(String.prototype.repeat.call(specialVal, 1), specialVal,
    "String.prototype.repeat did not work for " + specialVal);

specialVal = "$";
assert.sameValue(String.prototype.repeat.call(specialVal, 1), specialVal,
    "String.prototype.repeat did not work for " + specialVal);

specialVal = ".";
assert.sameValue(String.prototype.repeat.call(specialVal, 1), specialVal,
    "String.prototype.repeat did not work for " + specialVal);

specialVal = "str\nstr";
assert.sameValue(String.prototype.repeat.call(specialVal, 1), specialVal,
    "String.prototype.repeat did not work for " + specialVal);

specialVal = "\0\0";
assert.sameValue(String.prototype.repeat.call(specialVal, 1), specialVal,
    "String.prototype.repeat did not work for " + specialVal);

specialVal = "&";
assert.sameValue(String.prototype.repeat.call(specialVal, 1), specialVal,
    "String.prototype.repeat did not work for " + specialVal);

