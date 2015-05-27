// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with unicode values as search string.
es6id: 21.1.3.18
---*/

var val0 = "\uD842\uDFB7";
var val1 = "\u{20BB7}";
var val2 = "𠮷";
assert(val0.startsWith(val0));
assert(val1.startsWith(val0));
assert(val2.startsWith(val0));
assert(val0.startsWith(val1));
assert(val1.startsWith(val1));
assert(val2.startsWith(val1));
assert(val0.startsWith(val2));
assert(val1.startsWith(val2));
assert(val2.startsWith(val2));

