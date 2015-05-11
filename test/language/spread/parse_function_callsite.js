// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: parser test cases of spread in array
includes: [runTestCase.js]
es6id: 12.2.6.1
---*/

function testcase() {

  var pass = true;
  function foo(){};
  try{
    eval("foo(..[1])");
    pass = false;
  }catch(e){
    if(!(e instanceof SyntaxError))
        pass = false;
  }

  try{
    eval("foo(....[])");
    pass = false;
  }catch(e){
    if(!(e instanceof SyntaxError))
        pass = false;
  }

  try{
    eval("foo(......[1,2])");
    pass = false;
  }catch(e){
    if(!(e instanceof SyntaxError))
        pass = false;
  }

  return pass;
};

runTestCase(testcase);
