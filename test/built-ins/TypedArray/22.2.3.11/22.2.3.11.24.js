// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: predicate returns object type
includes: [TypedArrayHelper.js]
es6id: 22.2.3.11
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];

var arrayIndex = -1;
function predicate(value, index, obj) {
    arrayIndex++;
    if (value !== array[arrayIndex]) {
        $ERROR("Value mismatch in predicate at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in predicate for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }

    arrayIndex = -1;
    if (index == array.length - 1) {
        return { value: 1 };
    } else if (index == array.length / 2) {
        return { value: -1 };
    } else {
        return { value: 0 };
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].findIndex(predicate);
    if (output !== 0) {
        $ERROR("findIndex was expected to return " + 0 + " but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
