// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Call every method on empty array
includes: [TypedArrayHelper.js]
es6id: 22.2.3.7
---*/

function callbackFn(value, index, obj) {
    $ERROR("callbackFn is not expected to be called. Called for " + value + " and index " + index);
}
var array = [ ];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].every(callbackFn);
}
for (i = 0; i < typedArrays.length; i++) {
    if (0 != typedArrays[i].length) {
        $ERROR("Array length for " + typedArrays[i][Symbol.toStringTag] + " should be 0. Actual : " + typedArrays[i].length);
    }
}
