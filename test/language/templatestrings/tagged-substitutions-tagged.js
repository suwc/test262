// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Tagged-Substitutions]] Tagged handler"
includes: [templateTestHandler.js]
es6id: 12.2.9.1
---*/

var obj = {
    firstName : "Chakra",
    lastName : "Runtime"
};
var cookedStrings = ["Name object : ", " and a ", ""];
var rawStrings = ["Name object : ", " and a ", ""];
var substitutions = [ obj, 'string' ];
var str="Please visit Microsoft!"

var output = testHandler`Name object : ${{ firstName : "Chakra", lastName : "Runtime" }} and a ${new String('string')}`;
if (output != 'Success') {
    $ERROR('[Tagged-Substitutions] Raw Passing null to the tagged handler failed. Expected : Success || Actual : ' + output);
}
