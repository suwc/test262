// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: yield is allowed as IdentifierReference
es6id: 12.2.6
---*/

var yield = 10;
var obj = {
    yield
}
if (obj.yield !== 10) {
    $ERROR("obj.yield is expected to be 10.");
}
