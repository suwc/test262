// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat on non-string objects
es6id: 21.1.3.13
---*/

function val(nonStringObj)
{
    return String.prototype.repeat.call(nonStringObj, 1);
}

var nonStringObj = {};
assert.sameValue(val(nonStringObj), nonStringObj.toString(),
    "String.prototype.repeat gives incorrect output for: " + nonStringObj);

nonStringObj = new Uint8Array(10);
assert.sameValue(val(nonStringObj), nonStringObj.toString(),
    "String.prototype.repeat gives incorrect output for: " + nonStringObj);

nonStringObj = new Array(9);
assert.sameValue(val(nonStringObj), nonStringObj.toString(),
    "String.prototype.repeat gives incorrect output for: " + nonStringObj);

nonStringObj = new Error();
assert.sameValue(val(nonStringObj), nonStringObj.toString(),
    "String.prototype.repeat gives incorrect output for: " + nonStringObj);

