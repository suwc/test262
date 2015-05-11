// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-2-17.js
es6id: 25.1
---*/

if (WeakMap.prototype[Symbol.iterator]) {
    $ERROR("expected WeakMap prototype to not have an iterator");
}
