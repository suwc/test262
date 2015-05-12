// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    25.3.1.4    Generator.prototype [ @@iterator ] (   ) - Returns the
    this value.
author: Nikhil Suryanarayanan
es6id: 25.3
---*/

var iter = (function *(){})();
if(iter[Symbol.iterator]() !== iter)
    $ERROR('Generator.prototype [ @@iterator ] (   ) - Returns the this value');
