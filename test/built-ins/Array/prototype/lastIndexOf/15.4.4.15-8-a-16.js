// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-a-16
description: >
    Array.prototype.lastIndexOf -  deleting own property with
    prototype property causes prototype index property to be visited
    on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, 111, 2]; 
        
        Object.defineProperty(arr, "2", {
            get: function () {
                delete arr[1];
                return 0;
            },
            configurable: true
        });

        try {
            Array.prototype[1] = 1;
            return 1 === arr.lastIndexOf(1);
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
