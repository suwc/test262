// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: atat-iterator-2-9.js
es6id: 25.1
---*/

if (Object.prototype[Symbol.iterator]) {
    $ERROR("expected Object prototype to not have an iterator");
}
