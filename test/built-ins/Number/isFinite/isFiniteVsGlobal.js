// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Make sure Number.isFinite is not same as Global isFinite
es6id: 20.1.2.2
---*/

assert.notSameValue(Number.isFinite, isFinite);

