// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using bind
author: Nikhil Suryanarayanan
es6id: 14.2
---*/

var b = {
    method1: (arg) => {this.x = arg},
    method2: (arg) => {return (arg) => {this.y = arg}},
    method3: function(arg) {return (arg) => {this.z = arg}}
 }

 b.method1.bind(null, "arg1")();
 b.method2().bind(null, "arg2")();
 b.method3().bind(null, "arg3")();

 if(this.x !== "arg1" || this.y !== "arg2" || b.z !== "arg3")
    $ERROR('this binding was incorrect. Calling arrownFn.apply({}, "arg")');
