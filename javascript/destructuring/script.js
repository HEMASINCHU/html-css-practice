// //array destructure
// let fruits = ["mango", "orange", "banana", "apple"];

// const [fruit1, fruit2, fruit3] = fruits;
// console.log(fruits[0]);

// //rest operator
// const [fruit1, ...restelements] = fruits; //rest operator means remaining elements into one array
// console.log(fruit1);
// console.log(restelements);

// //comma operator
// const [, fruit2, , fruit4] = fruits; //, operator means skip for the element
// console.log(fruit2);
// console.log(fruit4);

// //swap
// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

////return value is function
// function getNumber() {
//   return [1, 2, 3];
// }

// const [num1, num2, num3] = getNumber();
// console.log(num1);

////Extracting Values from Function Parameters
// function printCoordinates([x, y]) {
//     console.log(`X: ${x}, Y: ${y}`);
//   }

//   const point = [5, 10];
//   printCoordinates(point);

// const matrix1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const [, [, middle]] = matrix1;
// console.log(middle);
