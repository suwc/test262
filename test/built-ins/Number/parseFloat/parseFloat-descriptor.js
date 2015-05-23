// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Number.parseFloat
includes: [propertyHelper.js]
es6id: 18.2.4
---*/

verifyWritable(Number, "parseFloat");
verifyNotEnumerable(Number, "parseFloat");
verifyConfigurable(Number, "parseFloat");

