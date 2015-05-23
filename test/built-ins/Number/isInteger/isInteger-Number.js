// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: isInteger is on Number and not on Number.prototype
es6id: 20.1.2.3
---*/

assert.sameValue(Object.getOwnPropertyNames(Number.prototype).indexOf("isInteger"), -1);

