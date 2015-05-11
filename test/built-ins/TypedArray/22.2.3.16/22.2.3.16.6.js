// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Match first element
includes: [TypedArrayHelper.js]
es6id: 22.2.3.16
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    var index = typedArrays[i].lastIndexOf(1);
    if (index !== 0) {
        $ERROR("Got wrong index as output. Actual " + index + ". Expceted : 0");
    }
}
