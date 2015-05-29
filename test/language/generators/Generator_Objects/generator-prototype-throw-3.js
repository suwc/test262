// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Generator.prototype.throw(value)
es6id: 25.3
---*/

var iter = (function *(){})();
if(typeof iter.throw !== "function")
    $ERROR('throw is undefined on the Generator Object');
