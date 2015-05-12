// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Literals are coerced to objects - Spreading String
author: Nikhil Suryanarayanan
es6id: 12.2.6.1
---*/

var a = "string";

 function foo() {
    return arguments.length === a.length && typeof arguments[0] === "string" ;
 }

 if( foo(...a) !== true)
    $ERROR('Spreading a string in function call failed');
