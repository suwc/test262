// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Usage of spread in string templates - Invalid operation
negative: SyntaxError
es6id: 12.2.6.1
---*/

function foo(arr,a){return a;}    ;
 var arr = [1,2,3];
 var strAdd = foo`${...a}`;
