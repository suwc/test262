// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: IdentifierReference with duplicate accessor definition
es6id: 12.2.6
---*/

var b = 1;
var obj = {
    set b(value) {
        this.a = value;
    },
    b
};
if (obj.b !== 1) {
    $ERROR("Data member definition is expected win over the accessor definition.");
}
