// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Array with the same element at all indices
includes: [TypedArrayHelper.js]
es6id: 22.2.3.13
---*/

var array = [ 8, 8, 8, 8, 8, 8, 8, 8 ];
var typedArrays = CreateTypedArrayInstances(array);

for (startIndex = 0; startIndex < array.length; startIndex++) {
    for (i = 0; i < typedArrays.length; i++) {
        var index = typedArrays[i].indexOf(8, startIndex);
        if (index !== startIndex) {
            $ERROR("Got wrong index as output. Actual " + index + ". Expceted : " + startIndex);
        }
    }
}
