// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.5 - WeakSet.prototype.has - 6. If Type(value) is not an
    object, then return false;
es6id: 23.4.3.4
---*/

var ws = new WeakSet([{}]);

if (ws.has(undefined) !== false)
    $ERROR("Return value expected to be false");
