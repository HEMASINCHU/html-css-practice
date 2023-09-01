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

// //object Destructuring
// const person = {
//   name: "hema",
//   surname: "r",
//   age: 25,
// };
// const { name, surname, age } = person;
// console.log(name, surname, age);

////Renaming Variables
// const book = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//   };

//   const { title: bookTitle, author: bookAuthor } = book;
//   console.log(bookTitle,bookAuthor);

////Default Values
// const person = {
//   name: "hema",
//   age: 20,
// };
// const { name, occupation = "farmer" } = person;
// console.log(name, occupation);

////nested
// const student = {
//   name: "hema",
//   rollno: 30,
//   score: {
//     maths: 50,
//     science: 80,
//   },
// };
// const {
//   name,
//   score: { maths, science },
// } = student;
// console.log(name, science);

// //function parameter
// const person = {
//   firstName: "Michael",
//   lastName: "Johnson",
// };
// function printFullName({ firstName, lastName }) {
//   console.log(`${firstName} ${lastName}`);
// }

// printFullName(person);

// //rest property
// const company = {
//   name: "TechCo",
//   location: "Silicon Valley",
//   size: "Large",
// };
// const { name, ...restProps } = company;

// console.log(name, restProps);
