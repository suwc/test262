// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    25.4.5.2 - initial value of Promise.prototype.constructor is the
    standard built-in Promise constructor
author: Nikhil Suryanarayanan
es6id: 25.4.5.2
---*/

assert.sameValue(Promise.prototype.constructor, Promise,
    "Initial value of Promise.prototype.ctor is incorrect");
