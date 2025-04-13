// //Hoisting

// // console.log(shubh)
// // const shubh=30

// //temporal dead-zone tdm fot let and const //reference error

// //undefined


// // const greet=function greet(name) {
// //     console.log(`hello ${name}`)
// // }//its declaration not define

// // greet("vasu")

// // for(let i=0;i<5;i++)
// // {
// //     setTimeout(() => {
// //         console.log(i)
// //     }, 1000);
// // }

// //call back queue ma update nhi thay e direct last value lese var ma call stack / call back queue 

// // const person=new Person("Vasu");
// // console.log(person.name)

// // class Person {
// //     constructor(name) {
// //         this.name=name;
// //     }
    
// // }

// // function Cars(carname)
// // {
// //     this.carname=carname;
// // }

// //constructor function will be  create class

// // const person={
// //     name:"vasu",
// //     age:22,
// //     role:"Trainee"
// // }

// // const {name:Firstname,age,role,namemee="vasu"} = person;

// // console.log(person.name)

// // const number=[10,20,30,40,50]

// // const[first,second]=number

// // const[,,third]=number

// // console.log(first)
// // console.log(third)

// // let a =1
// // let b =2

// // [b,a]=[a,b]

// // console.log(a)

// // class person{
// //     greet(){
// //         console.log("Hello")
// //     }
// // }

// // const one=[1,2,3,4,5]

// // const [a,b, ...rest] = nums;
// // console.log(a,b,rest);

// class Person {
//     constructor() {
//     }

//     greet() {
//         console.log("hello Person");
//     }
// }
// const student = new Person();
// // student.greet();

// //In chrome console
// //Person.prototype
// //student.__proto__
// //student.__proto__ === Person.prototype   returns true bcz internally it does student__proto = Person.prototype for each object

// //Adding extenstion method to class Person or predefined class
// // Person.prototype.customMethod = function () {
// //     console.log("custom method");
// // }

// class Professor extends Person {
//     constructor() {
//     }
//     subject() {
//         console.log("angular");
//     }
// }

// //Professor.__proto__ = Person.prototype internally bcz of inheritance


// let animal = {
//     eats: true
// };

// let dog = {
//     barks: true,
//     __proto__: animal  // dog inherits from animal
// };

// console.log(dog.barks); // true (from dog)
// console.log(dog.eats);  // true (from animal via prototype chain)

