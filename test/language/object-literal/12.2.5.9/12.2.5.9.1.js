// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Duplicate data properties
es6id: 12.2.6
---*/

"use strict";

var obj = { a : 1, a : 2 };

if (obj.a !== 2) {
    $ERROR('Second property definition should win');
}
