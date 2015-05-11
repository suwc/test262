// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Calling lastIndexOf with other types should throw a TypeError
includes: [TypedArrayHelper.js]
es6id: 22.2.3.16
---*/

var array = [ 1, 2, 4, 8, 16, 32, 8, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    try {
        var index = typedArrays[i].lastIndexOf.call("String", "s");
        $ERROR("Didn't throw an expected TypeError.");
    } catch (error) {
        if (!(error instanceof TypeError)) {
            $ERROR("Expected a TypeError. Actual " + error);
        }
    }
}
