// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with different values of position
includes: [propertyHelper.js]
es6id: 21.1.3.18
---*/

assert.sameValue(String.prototype.startsWith.length, 1);
verifyWritable(String.prototype, "startsWith");
verifyNotEnumerable(String.prototype, "startsWith");
verifyConfigurable(String.prototype, "startsWith");

