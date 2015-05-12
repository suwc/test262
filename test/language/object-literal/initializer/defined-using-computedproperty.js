// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: __proto__ defined using ComputedProperty is treated as a new data property
es6id: B.3.1
---*/

var obj = {
    __proto__: Array.prototype,
    ["__proto__"]: Object.prototype
}
if (!(obj instanceof Array)) {
    $ERROR("ComputedProperty definition of __proto__ should add it as a new data property");
}

