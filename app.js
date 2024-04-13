"use strict";
// SOLUTION # 3 : Name Cases: Store a persons name in a variable, and then print that person'name in lowercase, Uppercase and title case.
// Lower case
let personName = "muhammad adeel";
console.log("lowercase:", personName.toLowerCase());
// Upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//Title case
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
