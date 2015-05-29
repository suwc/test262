// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
path: sticky/22.2.2/22.2.2.6.1.js
description: RegExp sticky with '^' only matches at beginning of input.
es6id: 21.2.2.6
---*/

//

function test(re, str, lastIndex, loopCount, expected) {
    re.lastIndex = lastIndex;
    for (var i = 0; i < loopCount; i++) {
        var actualResult = re.exec(str);
        var actualLastIndex = re.lastIndex;
        if (actualResult != expected[i].result) {
            $ERROR(' actualResult = ' + actualResult + ', expectedResult = ' + expected[i].result);
        }
        if (actualLastIndex != expected[i].lastIndex) {
            $ERROR(' actualLastIndex = ' + actualLastIndex + ', expectedLastIndex = ' + expected[i].lastIndex);
        }
    }
}


test(/^b12/y, "b12asd\nb12", 1, 4,
[{result : null, lastIndex : 0},
{result : 'b12', lastIndex : 3},
{result : null, lastIndex : 0},
{result : 'b12', lastIndex : 3}]);
