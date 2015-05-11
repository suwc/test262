// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this is not an object
includes: [TypedArrayHelper.js]
es6id: 22.2.3.24
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        var output = typedArrays[i].slice.call("String");
        $ERROR("TypeError was expected to be thrown before this statement");
    } catch (error) {
        if (!(error instanceof TypeError)) {
            $ERROR("TypeError was expected to be thrown, but got " + error);
        }
    }
}
