
// let a = 10;

// let b = "100"

// if(a === "10" && b =="100"){
//      console.log(true);
// } else{
//      console.log(false);
// }


// if(a === "10" || b =="100"){
//     console.log(true);
// } else{
//     console.log(false);
// }

// switch(a){

//     case 10:
//         console.log(true);
//         break;
//     case "10":
//         console.log(false);
//         break;
//     case "20":
//         console.log(false);
//         break;
//     case "40":
//         console.log(false);
//         break;
//         default:
//             console.log(true);


// }

//a == "10" ? console.log(true) : console.log(false)


// let a = 0

// let b = 0

// while (a <20 || b == 10){

//     console.log("a",a);
//     console.log("b",b);

//     a = a + 1;

//     b = b + 1;
// }

// const PI = 3.14;
let arr = [20,30,40,10,100];
// arr[0] = arr[0]*PI
// arr[1] = arr[1]*PI
// arr[2] = arr[2]*PI

// console.log(arr)

// for(let i = arr.length-1; i>=0; i-- ){
//     console.log(arr[i]);
// }


arr.forEach((element, i) => {
    // console.log(element);
    console.log(i);
});

let obj ={

    name: "luis",
    age: 18,
    gender: "male",

}

for (const key in obj) {


    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }

    console.log(obj[key]);
}