// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: const statements must be inside a block when used in if statements
flags: [negative]
es6id: 13.3.1
---*/

if (true) const x = 1;
