// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Number.isInteger
includes: [propertyHelper.js]
es6id: 20.1.2.3
---*/

verifyWritable(Number, "isInteger");
verifyNotEnumerable(Number, "isInteger");
verifyConfigurable(Number, "isInteger");

