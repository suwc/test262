// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Multiple definitions of __proto__ with the production PropertyDefinition => PropertyName:AssignmentExpression causes SyntaxError
negative: SyntaxError
es6id: B.3.1
---*/

var obj = {
    __proto__: Array.prototype,
    __proto__: Object.prototype
}
