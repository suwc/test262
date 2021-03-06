// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-2-15
description: Array.prototype.filter - 'length' is property of the global object
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
       
        function callbackfn(val, idx, obj) {
            return  obj.length === 2;
        }

        try {
            var oldLen = fnGlobalObject().length;
            fnGlobalObject()[0] = 12;
            fnGlobalObject()[1] = 11;
            fnGlobalObject()[2] = 9;
            fnGlobalObject().length = 2;
            var newArr = Array.prototype.filter.call(fnGlobalObject(), callbackfn);
            return newArr.length === 2;
        } finally {
            delete fnGlobalObject()[0];
            delete fnGlobalObject()[1];
            delete fnGlobalObject()[2];
            fnGlobalObject().length = oldLen;
        }
    }
runTestCase(testcase);
