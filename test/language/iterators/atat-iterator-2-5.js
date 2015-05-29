// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: atat-iterator-2-5.js
es6id: 25.1
---*/

if (Error.prototype[Symbol.iterator]) {
    $ERROR("expected Error prototype to not have an iterator");
}
