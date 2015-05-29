// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Array.IsArray for proxy
es6id: 26.1
---*/
var proxy = new Proxy([], {});
if (!Array.isArray(proxy)) {
    $ERROR('IsArray for proxy should check for targets IsArray.');
}

var proxy = new Proxy({}, {});
if (Array.isArray(proxy)) {
    $ERROR('IsArray for proxy having object target should return false.');
}
