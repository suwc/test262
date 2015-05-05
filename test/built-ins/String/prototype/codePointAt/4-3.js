// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Test ToInteger(pos)
author: Murat Sutunc
---*/

if (" ".codePointAt(false) !== 32) {
    $ERROR("Expected 32, got " + " ".codePointAt(false) + " instead");
}
