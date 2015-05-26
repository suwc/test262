// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    String.prototype.repeat trhows range error for count<0 and for
    +Infinity, -Infinity
es6id: 21.1.3.13
negative: RangeError
---*/

var str = "sample";
str.repeat(-Infinity);
