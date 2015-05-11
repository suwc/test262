// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Other typed array types are passed as this
includes: [TypedArrayHelper.js]
es6id: 22.2.3.21
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].reverse.call(typedArrays[(i + 1) % typedArrays.length]);
}

for (i = 0; i < typedArrays.length; i++) {
    for (j = 0; j < typedArrays[i].length; j++) {
        if (typedArrays[i][j] !== array[array.length - (j + 1)]) {
            $ERROR("Got a wrong value at index " + j + " for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i][j] + ". Expected : " + array[array.length - (j + 1)]);
        }
    }
}
