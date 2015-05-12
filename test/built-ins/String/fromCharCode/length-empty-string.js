// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: If length is 0, the empty string is returned
author: Murat Sutunc
es6id: 21.1.2.1
---*/

if (String.fromCodePoint() !== "") {
    $ERROR("fromCodePoint() and '' should be equal")
}
