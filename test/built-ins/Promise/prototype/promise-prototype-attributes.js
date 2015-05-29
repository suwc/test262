// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Promise.prototype has attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: false }
includes: [propertyHelper.js]
es6id: 25.4.4
---*/

verifyNotWritable(Promise, "prototype");
verifyNotEnumerable(Promise, "prototype");
verifyNotConfigurable(Promise, "prototype");

