// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Inside the switch statements it's an error if a let statement is
    assigned before initialization
flags: [negative]
es6id: 13.3.1
---*/

let i = 1;
switch(i) {
    case 1:
        x++;
    case 2:
        let x = 1;
        break;
}
