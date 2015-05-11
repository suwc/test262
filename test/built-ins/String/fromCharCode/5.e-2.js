// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: If value is < 0 or value > 0x10FFFF throw RangeError
author: Murat Sutunc
es6id: 21.1.2.1
---*/

var error;

try {
    String.fromCodePoint(0x110000);
} catch(e) {
    error = e;
}

if (error === undefined) {
    $ERROR("Expected to throw an error but no error was thrown");
} else if (error.name !== "RangeError") {
    $ERROR("Expected to throw a RangeError but got " + error.name + " instead");
}
