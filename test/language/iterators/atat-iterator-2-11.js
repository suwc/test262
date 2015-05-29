// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: atat-iterator-2-11.js
es6id: 25.1
---*/

if (ReferenceError.prototype[Symbol.iterator]) {
    $ERROR("expected ReferenceError prototype to not have an iterator");
}
