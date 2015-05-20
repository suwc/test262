// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Const declarations are read-only
es6id: 13.3.1
negative: SyntaxError
---*/

const x = 1;
{
    x++;
}
