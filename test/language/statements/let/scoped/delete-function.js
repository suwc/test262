// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es6id: 13.3.1
negative: ReferenceError
---*/

eval("function f() { } delete f; f();");
