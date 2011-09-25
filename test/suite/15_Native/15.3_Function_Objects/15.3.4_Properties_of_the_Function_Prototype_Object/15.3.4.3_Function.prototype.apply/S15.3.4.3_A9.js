// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Function.prototype.apply.length property has the attribute DontDelete
 *
 * @path 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.3_Function.prototype.apply/S15.3.4.3_A9.js
 * @description Checking if deleting the Function.prototype.apply.length property fails
 */

//CHECK#0
if (!(Function.prototype.apply.hasOwnProperty('length'))) {
  $FAIL('#0: the Function.prototype.apply has length property');
}

//CHECK#1
if (delete Function.prototype.apply.length) {
  $ERROR('#1: The Function.prototype.apply.length property has the attributes DontDelete');
}

//CHECK#2
if (!(Function.prototype.apply.hasOwnProperty('length'))) {
  $FAIL('#2: The Function.prototype.apply.length property has the attributes DontDelete');
}
