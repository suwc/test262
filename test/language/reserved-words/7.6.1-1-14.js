// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-1-14
description: >
    Allow reserved words as property names at object initialization,
    verified with hasOwnProperty: public, yield, interface
includes: [runTestCase.js]
---*/

function testcase(){      
        var tokenCodes  = { 
            public: 0,
            yield: 1,
            interface: 2
        };
        var arr = [
            'public',
            'yield',
            'interface'
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
