// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Number.parseInt
includes: [propertyHelper.js]
es6id: 18.2.5
---*/

verifyWritable(Number, "parseInt");
verifyNotEnumerable(Number, "parseInt");
verifyConfigurable(Number, "parseInt");

