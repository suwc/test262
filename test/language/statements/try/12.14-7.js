// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    local vars must not be visible outside with block
    local functions must not be visible outside with block
    local function expresssions should not be visible outside with block
    local vars must shadow outer vars
    local functions must shadow outer functions
    local function expresssions must shadow outer function expressions
    eval should use the appended object to the scope chain
es5id: 12.14-7
description: catch introduces scope - scope removed when exiting catch block
includes: [runTestCase.js]
---*/

function testcase() {
      var o = {foo: 1};
      var catchAccessed = false;
      
      try {
        throw o;
      }
      catch (expObj) {
        catchAccessed = (expObj.foo == 1);
      }

      try {
        expObj;
      }
      catch (e) {
        return catchAccessed && e instanceof ReferenceError
      }
      return false;
    }
runTestCase(testcase);
