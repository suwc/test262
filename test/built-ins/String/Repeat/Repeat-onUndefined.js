// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat on undefined
es6id: 21.1.3.13
negative: TypeError
---*/

String.prototype.repeat.call(undefined,0);

