// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: predicate returns true for find
includes: [TypedArrayHelper.js]
es6id: 22.2.3.10
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];

var predicateObj = {
    arrayIndex : -1,
    predicate(value, index, obj) {
        this.arrayIndex++;
        if (value !== array[this.arrayIndex]) {
            $ERROR("Value mismatch in predicate at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
        }
        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in predicate for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        if (index < array.length / 2) {
            return false;
        } else {
            this.arrayIndex = -1;
            return true;
        }
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].find(predicateObj.predicate, predicateObj);
    if (output !== array[array.length / 2]) {
        $ERROR("Find was expected to return " + array[array.length / 2] + " but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
