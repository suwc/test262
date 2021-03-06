// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-5-13
description: >
    Allow reserved words as property names at object initialization,
    accessed via indexing: implements, let, private
includes: [runTestCase.js]
---*/

function testcase() {
        var tokenCodes = {
            implements: 0,
            let: 1,
            private: 2
        };
        var arr = [
            'implements',
            'let',
            'private'
        ];   
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);
