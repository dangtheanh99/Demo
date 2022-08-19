// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// sleep(1000)
//   .then(() => {
//     console.log(1);
//     return sleep(1000);
//   })
//   .then(() => {
//     console.log(2);
//     return sleep(2000);
//   })
//   .then(() => {
//     console.log(3);
//     return sleep(5000);
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/2")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// class Course {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   getName() {
//     return this.name;
//   }

//   getPrice() {
//     return this.price;
//   }
// }

// const jsCourse = new Course("Javascript", 1000);
// const JavaCourse = new Course("Java", 1500);

// console.log(jsCourse.getName());
// console.log(JavaCourse.getName());

// var fullName = "dang the anh";
// var age = 22;

// var Info = {
//   fullName,
//   age,
// };

// console.log(Info);

// IIFE: imediately involked function expression
let myName = "the anh";
(function (message) {
  console.log("Message: ", message);
})("Hello everyone!");
