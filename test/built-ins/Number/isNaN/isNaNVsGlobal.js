// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: verifying Number.isNaN !== Global isNaN
es6id: 20.1.2.4
---*/

assert.notSameValue(Number.isNaN, isNaN);

