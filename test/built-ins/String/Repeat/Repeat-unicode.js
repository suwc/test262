// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat with unicode characters
es6id: 21.1.3.13
---*/

function val(unicodeChars)
{
    return String.prototype.repeat.call(unicodeChars,1);
}

var unicodeChars = "\uD842\uDFB7";
assert.sameValue(val(unicodeChars), unicodeChars);

unicodeChars = "\u{20BB7}";
assert.sameValue(val(unicodeChars), unicodeChars);

unicodeChars = "𠮷";
assert.sameValue(val(unicodeChars), unicodeChars);

