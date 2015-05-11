// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Call reverse on non-TypedArrays
includes: [TypedArrayHelper.js]
es6id: 22.2.3.21
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    try {
        typedArrays[i].reverse.call("String");
    } catch (error) {
        if (!(error instanceof TypeError)) {
            $ERROR("Expected a TypeError but got " + error);
        }
    }
}
