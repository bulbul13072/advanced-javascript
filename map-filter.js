// To see the squire of each element of the array in a new array
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

// for (let i=0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// function square (element){
// return element = element * element;
// }

// You can do it easily with mapping
// const result = numbers.map(function (element) {
//     return element * element;
// })
// console.log(result);
// // you can also like that
// const element = element => element*element;
//or
const square = x => x * x;
console.log(square);

you can also try Filter/Find/Reduce/
//Filter returns an array
//Find return an element
