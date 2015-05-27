// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with a RTL language
es6id: 21.1.3.18
---*/

var str = "اختبار تكرار";
var searchStr = str[0]+str[1];
assert(str.startsWith(searchStr));

