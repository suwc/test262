// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype.valueOf returns the this argument if it is a symbol
es6id: 19.4.3.3
---*/

try {
    var sym = Symbol();
    var ret = Symbol.prototype.valueOf.call(sym);

    if (sym !== ret) {
        $ERROR("sym !== ret'");
    }
} catch (e) {
    $ERROR("Unexpected error was thrown " + e);
}
