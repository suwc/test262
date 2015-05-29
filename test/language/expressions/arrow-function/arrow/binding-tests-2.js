// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this binding tests
es6id: 14.2
---*/

function foo(){
    return eval("()=>this");
 }

 if(foo()() !== this)
     $ERROR('This binding initialization was incorrect for arrow capturing this from closure');
