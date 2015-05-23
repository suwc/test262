// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Math.trunc
includes: [propertyHelper.js]
es6id: 20.1.2.6
---*/

assert.sameValue(Number.MAX_SAFE_INTEGER, 9007199254740991);
verifyNotWritable(Number, "MAX_SAFE_INTEGER");
verifyNotEnumerable(Number, "MAX_SAFE_INTEGER");
verifyNotConfigurable(Number, "MAX_SAFE_INTEGER");

