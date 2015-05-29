// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: spread object property
es6id: 12.2.6.1
---*/

function foo(a,b){
    return (a === 1) && (b === 2);
 }

 var obj = {
    key : [1,2]
 }

 if(foo(...eval('obj.key')) !== true ||  foo(...obj['key']) !== true)
 $ERROR('Failed while trying to spread a key of an object in function call');
