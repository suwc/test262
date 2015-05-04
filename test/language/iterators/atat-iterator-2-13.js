// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-2-13.js
---*/

if (Symbol.prototype[Symbol.iterator]) {
    $ERROR("expected Symbol prototype to not have an iterator");
}
