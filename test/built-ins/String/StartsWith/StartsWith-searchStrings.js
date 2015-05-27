// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: tartsWith-searchStrings
description: String.prototype.StartsWith with different values of search strings
es6id: 21.1.3.18
---*/

var str = "sample";
assert(!str.startsWith(undefined, 0));
assert(!str.startsWith(null, 0));
assert(!str.startsWith("samples", 0));
assert(!str.startsWith("samble", 0));
assert(!str.startsWith(" sample", 0));
assert(!str.startsWith("\0sample", 0));
assert(!str.startsWith("\n\nsample", 0));
assert(!str.startsWith("sample" + "sample", 0));

var str2 = "sample\0\nsample"
assert(str2.startsWith("sample", 8));

