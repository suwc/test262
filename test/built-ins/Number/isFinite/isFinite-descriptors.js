// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Number.isFinite
includes: [propertyHelper.js]
es6id: 20.1.2.2
---*/

verifyWritable(Number, "isFinite");
verifyNotEnumerable(Number, "isFinite");
verifyConfigurable(Number, "isFinite");

