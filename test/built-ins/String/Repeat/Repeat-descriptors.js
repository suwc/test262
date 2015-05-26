// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Validating descriptor for String.prototype.repeat
includes: [propertyHelper.js]
es6id: 21.1.3.13
---*/

verifyWritable(String.prototype, "repeat");
verifyNotEnumerable(String.prototype, "repeat");
verifyConfigurable(String.prototype, "repeat");

