// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "CoverParenthesisedExpressionAndArrowParameterList :( Expression )"
author: Nikhil Suryanrayanan
es6id: 14.2
---*/

if(((a, b) => this)() !== this)
    $ERROR('CoverParenthesisedExpressionAndArrowParameterList :( Expression ) failed for (a, b) => this')
