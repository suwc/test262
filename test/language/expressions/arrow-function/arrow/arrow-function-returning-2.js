// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: arrow function returning object
es6id: 14.2
---*/

var obj_1 = value => ({ "value": value });
if((obj_1('obj'))["value"] !== 'obj' )
    $ERROR('Obj_1 arrow function mapping to value');
