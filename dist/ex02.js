"use strict";
// 2. Create a generic interface called `Data` with two properties: 
// `id` (number) and `value` (of any type). 
// Define an object of type `Data` where `value` is a string "Generic" and `id` is 1.
// Log the object.
const data = { id: 1, value: "Generic" };
console.log(data); // Expected output: { id: 1, value: "Generic" }
const data1 = { id: 1, value: 3 };
console.log(data1); // Expected output: { id: 1, value: 3 }
const data2 = { id: 1, value: false };
console.log(data2); // Expected output: { id: 1, value: false }
