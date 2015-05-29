// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Promise - 3.    4.    If promise does not have a [[PromiseStatus]]
    internal slot, then throw a TypeError exception.
es6id: 25.4.3
negative: TypeError
---*/

Promise.call({}, function(f,r){});

