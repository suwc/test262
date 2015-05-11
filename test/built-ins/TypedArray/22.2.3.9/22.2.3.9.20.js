// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Try to change the length of typed array
includes: [TypedArrayHelper.js]
es6id: 22.2.3.9
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];

var filterObj = {
    arrayIndex : -1,
    filterFn(value, index, obj) {
        this.arrayIndex = (this.arrayIndex + 1) % (array.length);

        if (value !== array[this.arrayIndex]) {
            $ERROR("Value mismatch in filterFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
        }
        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in filterFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        return index % 2 == 0;
    }
}

var filteredArrays = [];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array.slice(0, array.length));
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].length = typedArrays[i].length * 2;
    filteredArrays[filteredArrays.length] = typedArrays[i].filter(filterObj.filterFn, filterObj);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i][Symbol.toStringTag] !== filteredArrays[i][Symbol.toStringTag]) {
        $ERROR("Tag mismatch. Typed array : " + typedArrays[i][Symbol.toStringTag] + ". Filtered array : " + filteredArrays[i][Symbol.toStringTag]);
    }
    if (typedArrays[i].length / 2 !== filteredArrays[i].length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Filtered array : " + filteredArrays[i].length);
    }
    for (j = 0; j < array.length / 2; j++) {
        if (array[j * 2] !== filteredArrays[i][j]) {
            $ERROR("Element mismatch for Filtered array for " + filteredArrays[i][Symbol.toStringTag] + " at index " + j + ". Actual : " + filteredArrays[i][j] + ". Expected : " + array[j * 2]);
        }
    }
}
