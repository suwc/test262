// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with special characters
es6id: 21.1.3.18
---*/

var str = "[[]]{}{{}}&&%$...^*#";
assert(str.startsWith("[", 0));
assert(str.startsWith("[", 1));
assert(str.startsWith("]", 2));
assert(str.startsWith("]", 3));
assert(str.startsWith("{", 4));
assert(str.startsWith("}", 5));
assert(str.startsWith("{", 6));
assert(str.startsWith("{", 7));
assert(str.startsWith("}", 8));
assert(str.startsWith("}", 9));
assert(str.startsWith("&", 10));
assert(str.startsWith("&", 11));
assert(str.startsWith("%", 12));
assert(str.startsWith("$", 13));
assert(str.startsWith(".", 14));
assert(str.startsWith(".", 15));
assert(str.startsWith(".", 16));
assert(str.startsWith("^", 17));
assert(str.startsWith("*", 18));
assert(str.startsWith("#", 19));

