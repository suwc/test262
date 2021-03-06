// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-1-6
description: >
    Allow reserved words as property names at object initialization,
    verified with hasOwnProperty: continue, for, switch
includes: [runTestCase.js]
---*/

function testcase(){      
        var tokenCodes  = { 
            continue: 0, 
            for: 1, 
            switch: 2
        };
        var arr = [
            'continue', 
            'for',
            'switch'
        ];        
        for(var p in tokenCodes) {
            for(var p1 in arr) {
                if(arr[p1] === p) {                     
                    if(!tokenCodes.hasOwnProperty(arr[p1])) {
                        return false;
                    };
                }
            }
        }
        return true;
}
runTestCase(testcase);
