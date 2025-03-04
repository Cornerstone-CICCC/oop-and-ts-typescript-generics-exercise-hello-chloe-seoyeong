// 5. Create a generic arrow function called `filterArray` that filters an array based on a callback function.
// Pass an array of numbers [1, 2, 3, 4, 5] and filter for numbers greater than 2.
// Log the filtered array.

const filterArray = <T, U>(arr: T[], callback: (el: T) => U): T[] => arr.filter(callback); // T: number, T[]: number[], U: boolean

console.log(filterArray([1, 2, 3, 4, 5], (n) => n > 2)); // Expected output: [3, 4, 5]
console.log(filterArray([10, 24, 33, 42, 57], (n) => n%2)); // Expected output: [33, 57]