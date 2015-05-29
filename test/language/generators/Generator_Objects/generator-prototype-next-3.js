// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Generator.prototype.next(value)
es6id: 25.3
---*/

var iter = (function *(){})();
if(typeof iter.next !== "function")
    $ERROR('next is undefined on the Generator Object');
