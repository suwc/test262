// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
flags: [negative]
es6id: 13.3.1
---*/

eval("function f() { } delete f; f();");
