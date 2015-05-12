// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[IdentifierReference]] IdentifierReference inside a string
    template
es6id: 12.2.6
---*/

var a = 10;
var obj;
`${obj = {
    a
}}`;

if (obj.a !== 10) {
    $ERROR("Got a wrong value for the property a. Actual : " + obj.a + ". Expected : 10");
}
