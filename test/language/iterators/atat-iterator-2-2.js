// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: atat-iterator-2-2.js
es6id: 25.1
---*/

if (Boolean.prototype[Symbol.iterator]) {
    $ERROR("expected Boolean prototype to not have an iterator");
}
