// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-199
description: >
    Object.create - one property in 'Properties' is the JSON object
    that uses Object's [[Get]] method to access the 'writable'
    property (8.10.5 step 6.a)
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            JSON.writable = true;

            var newObj = Object.create({}, {
                prop: JSON 
            });

            var beforeWrite = (newObj.hasOwnProperty("prop") && typeof (newObj.prop) === "undefined");

            newObj.prop = "isWritable";

            var afterWrite = (newObj.prop === "isWritable");

            return beforeWrite === true && afterWrite === true;
        } finally {
            delete JSON.writable;
        }
    }
runTestCase(testcase);
