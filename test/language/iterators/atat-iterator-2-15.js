// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: atat-iterator-2-15.js
es6id: 25.1
---*/

if (TypeError.prototype[Symbol.iterator]) {
    $ERROR("expected TypeError prototype to not have an iterator");
}
