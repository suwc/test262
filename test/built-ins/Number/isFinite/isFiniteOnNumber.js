// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Make sure Number.isFinite is on Number rather than Number.prototype
es6id: 20.1.2.2
---*/

assert.sameValue(Object.getOwnPropertyNames(Number.prototype).indexOf("isFinite"), -1);

