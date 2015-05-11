// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.raw(template,...substitutions) performs ToLength(template['raw'].length) which throws if length is a symbol primitive
es6id: 12.2.9.1
---*/

try {
    var raw = {};
    Object.defineProperty(raw, 'length', { get: function() { return Symbol(); } });

    var template = { 'raw': raw };

    String.raw(template);

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR('Wrong type of error was thrown ' + e);
    }
}
