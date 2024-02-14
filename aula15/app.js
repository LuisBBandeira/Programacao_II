class Test {

    constructor() {

    }

    method1() {
        console.log("class mthod 1");
       this.#method2();
    }

    #method2() {

        console.log("class mthod 2");
    }
}

const test = new Test();
test.method1();
// test.method2();



const TestObj = {
    method1: () => {
        console.log("obj mthod 1");
    },
    method2: () => {
        console.log("obj mthod 2");
    }
}

TestObj.method1();
// const arr = ["11", 2, [31, 32,"33", 34, 35]]

// const recursion = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);

//         if(typeof(arr[i]) == "string") {

//             const arr2 = arr[i].split("");
//             for (let j = 0; j < arr2.length; j++) {
//                 recursion(parseInt(arr2[j]));
//             }
//         } else if(arr[i].length) {
//             recursion(arr[i]);
//         }
//     }
// }
// recursion(arr);