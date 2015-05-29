// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    25.4.4 - The value of the [[Prototype]] internal slot of the
    Promise constructor is the Function prototype object
es6id: 25.4.4
---*/

assert.sameValue(Promise.constructor.prototype, Function.prototype,
    'he value of the [[Prototype]] internal slot of the Promise constructor is the Function prototype object');
