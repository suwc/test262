// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-5-7
description: >
    Allow reserved words as property names at object initialization,
    accessed via indexing: while, debugger, function
includes: [runTestCase.js]
---*/

function testcase() {
        var tokenCodes  = { 
            while: 0, 
            debugger: 1, 
            function: 2
        };
        var arr = [ 
            'while' ,
            'debugger', 
            'function'
        ];    
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);
