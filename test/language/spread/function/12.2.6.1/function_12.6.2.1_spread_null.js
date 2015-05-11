// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Literals are coerced to objects - Spreading null
author: Nikhil Suryanarayanan
es6id: 12.2.6.1
---*/

var a = null;
  function foo(){};

  //ToObject(null) throws TypeError
  try{
    foo(...a);
  }catch(e){
    if((e instanceof TypeError) !== true)
        $ERROR('TypeError Expected when trying to spread null');
  }
