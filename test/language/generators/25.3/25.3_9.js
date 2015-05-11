// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Generator.prototype [ @@iterator ] () - The value of the name
    property of Generator.prototype [ @@iterator ]() is
    "[Symbol.iterator]
author: Nikhil Suryanarayanan
es6id: 25.3
---*/

var iter = (function *(){})();
if(iter[Symbol.iterator].name !== "[Symbol.iterator]")
    $ERROR('The value of the name property of Generator.prototype [ @@iterator ]() is "[Symbol.iterator]')
