// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Undefined is not coercible
es6id: 21.1.3.3
negative: TypeError
---*/

"err".codePointAt.apply(null,[0,0]);

