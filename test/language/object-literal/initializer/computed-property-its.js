// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Computed property has its own object as the expression
es6id: 12.2.6
---*/

var obj = {
    a() { return "b"; },
    [obj] : 20
};

if (obj[undefined] !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj[undefined] + ". Expected : 20");
}
