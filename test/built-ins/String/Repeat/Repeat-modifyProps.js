// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat on objects with toStrings redefined
es6id: 21.1.3.13
---*/

var obj1 = new Object("object");
obj1.length = 10;
assert.sameValue(String.prototype.repeat.call(obj1, 1), "object",
    "Incorrect result for object with length property");

var obj2 = new Object("object");
obj2.toString = function () { return "obj"; }
assert.sameValue(String.prototype.repeat.call(obj2, 1), "obj",
    "Incorrect result for object with toString modified");

var str = "string";
str.toString = function () { return "str"; }
assert.sameValue(str.repeat(1), str,
    "Incorrect result for String with toString modified");

var str2 = "string";
str2.length = 0;
assert.sameValue(str2.repeat(1), str2,
    "Incorrect result for String with length modified");

