// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[String.Raw]] Wrong call site object input to String.raw"
es6id: 12.2.9.1
---*/

var callSite = [];
callSite.raw = ['a', 'c', 'e'];
var substitutions = ['b', 'd', 'f'];
var str = "";
var output = String.raw(callSite, ...substitutions);

if (output !== "abcde") {
    $ERROR('[String.Raw] Invoking String.raw with an empty callsite array failed. Expected : abcde || Actual : ' + output);
}
