// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Promise - 3.    If Type(promise) is not Object, then throw a
    TypeError exception.
author: Nikhil Suryanarayanan
es6id: 25.4.3
---*/

try{
    Promise.call(undefined, function(f,r){});
    $ERROR('Test Failed');
}catch(e){
    if(!(e instanceof TypeError))
        $ERROR("TypeError Expected");
}
