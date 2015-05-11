// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callback function is a set method
includes: [TypedArrayHelper.js]
es6id: 22.2.3.12
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;

var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var callbackObj = {
        arrayIndex : -1,
        set callbackFn(value) {
            var index = arguments[1];
            var obj = arguments[2];
            this.arrayIndex = (this.arrayIndex + 1) % array.length;
            if (value !== array[this.arrayIndex]) {
                $ERROR("Value mismatch in callbackFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
            }
            if (index !== this.arrayIndex) {
                $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + this.arrayIndex);
            }
        }
    }
    var func = Object.getOwnPropertyDescriptor(callbackObj, "callbackFn");
    typedArrays[i].forEach(func.set, callbackObj);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Array : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] !== typedArrays[i][j]) {
            $ERROR("Element mismatch for typed array " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i][j] + ". Expected : " + array[j]);
        }
    }
}
