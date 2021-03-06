// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10-0-7
description: with introduces scope - scope removed when exiting with statement
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase() {
  var o = {foo: 1};

  with (o) {
    foo = 42;
  }

  try {
    foo;
  }
  catch (e) {
     return true;
  }
 }
runTestCase(testcase);
