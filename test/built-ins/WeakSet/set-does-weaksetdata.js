// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.1.1 - 3.    If set does not have a [[WeakSetData]] internal
    slot, then  throw a TypeError exception.
author: Nikhil Suryanarayanan
es6id: 23.4.1
---*/

var error;
try {
    WeakSet.call({});
} catch(e) {
    error = e;
}
if (!(error instanceof TypeError))
    $ERROR("TypeError Expected");
