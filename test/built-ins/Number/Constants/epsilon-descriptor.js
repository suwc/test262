// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Number.EPSILON
includes: [propertyHelper.js]
es6id: 20.1.2.1
---*/

assert.sameValue(Number.EPSILON, 2.2204460492503130808472633361816e-16);
verifyNotWritable(Number, "EPSILON");
verifyNotEnumerable(Number, "EPSILON");
verifyNotConfigurable(Number, "EPSILON");

