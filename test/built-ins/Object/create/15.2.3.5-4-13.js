// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-13
description: >
    Object.create - argument 'Properties' is the JSON object (15.2.3.7
    step 2)
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;

        Object.defineProperty(JSON, "prop", {
            get: function () {
                result = (this === JSON);
                return {};
            },
            enumerable: true,
            configurable: true
        });

        try {
            var newObj = Object.create({}, JSON);
            return result && newObj.hasOwnProperty("prop");
        } finally {
            delete JSON.prop;
        }
    }
runTestCase(testcase);
