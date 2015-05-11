// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this argument is not an object will cause type error
includes: [TypedArrayHelper.js]
es6id: 22.2.3.19
---*/

function callbackFn(prev, current, index, obj) {
    $ERROR("callbackFn is not expected to be called. Called for " + current + " and index " + index);
}

var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        typedArrays[i].reduce.call(null, callbackFn);
        $ERROR("Error: Expected to throw a TypeError but reduce didn't throw");
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("Error: Expected to throw a TypeError but got " + e + " instead");
        }
    }
}
