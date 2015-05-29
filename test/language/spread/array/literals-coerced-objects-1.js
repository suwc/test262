// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Literals are coerced to objects - Spreading null
es6id: 12.2.5.2
---*/

var a = null;
 try{
    var b = [...a];
 }catch(e){
    if((e instanceof TypeError) !== true)
        $ERROR('TypeError Expected when spreding null');
 }
