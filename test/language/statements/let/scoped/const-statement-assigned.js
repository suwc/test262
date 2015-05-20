// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    A const statement can't be assigned from a function body before
    it's initialized
es6id: 13.3.1
negative: SyntaxError
---*/

function testcase() {
    function foo() {
        x++;
    }
    foo();
    const x = 4;
};
testcase();
