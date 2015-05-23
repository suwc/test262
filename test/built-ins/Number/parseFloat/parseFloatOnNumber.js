// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Make sure Number.parseFloat is on Number rather than
    Number.prototype
es6id: 18.2.4
---*/

assert.sameValue(Object.getOwnPropertyNames(Number.prototype).indexOf("parseFloat"), -1);

