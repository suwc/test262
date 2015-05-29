// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: If IsPromise(promise) is false, throw a TypeError exception.
es6id: 25.4.5
---*/

try{
    Promise.prototype.then.call({}, function(){});
    $ERROR("Error Expected");
}catch(e){
    if(!(e instanceof TypeError))
        $ERROR("TypeError Expected")
}
