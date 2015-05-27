// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with non-string objects
es6id: 21.1.3.18
---*/

var object = new Object("sample");
var array = new Array("sample");

assert.sameValue(String.prototype.startsWith.call(object, object), true);
assert.sameValue(String.prototype.startsWith.call(object, array), true);
assert.sameValue(String.prototype.startsWith.call(array, object), true);
assert.sameValue(String.prototype.startsWith.call(array, array), true);

