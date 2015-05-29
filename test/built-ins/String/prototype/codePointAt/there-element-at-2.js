// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: If there is no element at that position, the result is undefined
es6id: 21.1.3.3
---*/

assert.sameValue("".codePointAt(-1), undefined);

