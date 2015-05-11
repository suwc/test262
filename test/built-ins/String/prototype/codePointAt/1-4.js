// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Object should be coercible
author: Murat Sutunc
es6id: 21.1.3.3
---*/

Object.prototype.codePointAt = String.prototype.codePointAt;
var x = {0:"a"};

if (x.codePointAt(0) !== 91) {
    $ERROR("Expected Object to be coercible, it isn't")
}
