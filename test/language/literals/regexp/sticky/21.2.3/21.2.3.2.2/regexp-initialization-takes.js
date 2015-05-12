// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Kunal Pathak
description: RegExp initialization takes sticky flag "y"
es6id: 21.2.3.2.2
---*/

//

var re1, re2, re3;
try
{
    re1 = /^\d/gyi;
    re2 = new RegExp("\W.*$", "yg");
    re3 = new RegExp("\D.*$", "g");
}
catch(error)
{
    $ERROR("'y' is a valid sticky flag in RegExp.");
}
