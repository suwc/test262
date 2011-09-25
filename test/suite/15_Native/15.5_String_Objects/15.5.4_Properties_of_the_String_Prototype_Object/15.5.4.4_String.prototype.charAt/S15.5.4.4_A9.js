// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.charAt.length property has the attribute DontDelete
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.4_String.prototype.charAt/S15.5.4.4_A9.js
 * @description Checking if deleting the String.prototype.charAt.length property fails
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.charAt.hasOwnProperty('length'))) {
  $ERROR('#0: String.prototype.charAt.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.charAt.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.charAt.length) {
  $ERROR('#1: delete String.prototype.charAt.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.charAt.hasOwnProperty('length'))) {
  $ERROR('#2: delete String.prototype.charAt.length; String.prototype.charAt.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.charAt.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////
