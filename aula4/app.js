
import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

// console.log("hello");

// let a = 1;
// let b = 0;

// const fibonaci = () =>{
    
//     for (let i = 2; i <= 10; i++) {
//         const  temp = a;
//         a = a + b;
//         b = temp;
//             console.log(a);
        
//     }


//     // for (let i = 0; i < 10; i++) {
//     //     b = a;
//     //     a = a += a;
//     //     console.log(b);
//     // }

// }

// fibonaci();


// let user ={
//     id: 0,
//     name: "Luis",
//     age: 18,
//     gender: "male",
//     dob: "02/05/05",
//     hobbies: ["pc" ,"read"]

// }

// console.log(user)

// for (const key in user) {
    //     console.log(user[key])
// }

// let user ={
//     id: 0,
//     name: "Luis",
//     age: 18,
//     gender: "male",
//     dob: "02/05/05",
//     hobbies: ["pc" ,"read"]
// }

// class User{

//     #name;
//     age;

//     constructor(user){
//         this.#name = user.name
//         this.age = user.age

//         console.log(this.#getName());
//     }

//     #getName(){ 
//         return this.#name        
//     }

//     getAge() {
//         return this.age
//     }

//     set name(value){
//         this.#name = value
//     }

//     get name(){
//         return this.#name
//     }
// }

// const user2 = new User(user);
// console.log(user2.getName());


const car = new Car()
const motorcycle = new Motorcycle();