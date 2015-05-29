// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: non-writable.js
es6id: 25.1
---*/

var simpleIterator = {
    [Symbol.iterator]: function() {
        return {
            i: 0,
            next: function() {
                return {
                    done: this.i == 3,
                    value: this.i++
                };
            }
        };
    }
};

var result = '';
var test = {};
Object.defineProperty(test, 'non-writable', {
    value: 'nw',
    writable: false
});

// Test non-writable property
for (test['non-writable'] of simpleIterator) {
    result += test['non-writable'];
}

if (result !== 'nwnwnw') {
    $ERROR('unexpected result value');
}
