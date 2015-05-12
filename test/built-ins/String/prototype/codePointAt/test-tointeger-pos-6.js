// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Test ToInteger(pos)
author: Murat Sutunc
es6id: 21.1.3.3
---*/

if (" ".codePointAt({0:"a"}) !== 32) {
    $ERROR("Expected 32, got " + " ".codePointAt({0:"a"}) + " instead");
}
