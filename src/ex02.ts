// 2. Create a generic interface called `Data` with two properties: 
// `id` (number) and `value` (of any type). 
// Define an object of type `Data` where `value` is a string "Generic" and `id` is 1.
// Log the object.

interface Data<T> {
  id: number;
  value: T
}

const data: Data<string> = { id: 1, value: "Generic" };
console.log(data); // Expected output: { id: 1, value: "Generic" }

const data1: Data<number> = { id: 1, value: 3 };
console.log(data1); // Expected output: { id: 1, value: 3 }

const data2: Data<boolean> = { id: 1, value: false };
console.log(data2); // Expected output: { id: 1, value: false }