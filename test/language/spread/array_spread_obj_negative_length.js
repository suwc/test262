// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Spreading an object with negative length property
author: Nikhil Suryanarayanan
es6id: 12.2.5.2
negative: SyntaxError
---*/

var obj {
    length : -1
 };

 [...obj];
