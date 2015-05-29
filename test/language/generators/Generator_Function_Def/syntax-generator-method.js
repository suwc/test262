// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: 14.4 - Syntax - Generator Method Testing propertyName
es6id: 14.4
---*/

var baz = "baz";
var bunchofgenerators = {
    gfoo : function*() {},
    *bar() {},
    *[baz]() {}
}
