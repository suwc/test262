// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Generator method and rest
es6id: 14.1
---*/

var expectedArray = [3, 4];
function *foo(a, b = 10, ...args) {
    if (a !== 1) {
        $ERROR("First argument is expected to be 1");
    }
    if (b !== 2) {
        $ERROR("Second argument is expected to be 2");
    }
    if (args.length !== expectedArray.length) {
        $ERROR("The rest argument is expected to have length " + expectedArray.length);
    }
    for (i = 0; i < expectedArray.length; i++) {
        if (args[i] !== expectedArray[i]) {
            $ERROR("The rest argument's " + i + "th element is expected to be " + expectedArray[i] + " but got " + args[i] + " instead");
        }
    }
    yield 1;
    yield 2;
}

var generator = foo(1, 2, 3, 4);
var result = generator.next();
if (result.value !== 1) {
    $ERROR("Generator is expected to return 1 first, but got " + result);
}
result = generator.next();
if (result.value !== 2) {
    $ERROR("Generator is expected to return 2 first, but got " + result);
}

expectedArray = [3, 4, 5];
generator = foo(1, 2, 3, 4, 5);
result = generator.next();
if (result.value !== 1) {
    $ERROR("Generator is expected to return 1 first, but got " + result);
}
result = generator.next();
if (result.value !== 2) {
    $ERROR("Generator is expected to return 2 first, but got " + result);
}
