// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-2-4
description: >
    Array.prototype.reduceRight - 'length' is own data property that
    overrides an inherited data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var arrProtoLen;
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj.length === 2;
        }

        try {
            arrProtoLen = Array.prototype.length;
            Array.prototype.length = 0;

            return [12, 11].reduceRight(callbackfn, 11) && accessed;
        } finally {
            Array.prototype.length = arrProtoLen;
        }

    }
runTestCase(testcase);
