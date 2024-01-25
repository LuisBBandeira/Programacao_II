// window.onload = () =>{
    
// let result;

// const math = (a,b) => {

//     a = 1;
//     b = 2;
    
//     result = a+b;

//     return result;

    
// }
// console.log(math());

// }

// window.onload = () =>{

//     let result;

//     const mult = (a,b) => {
//         a = 4;
//         b = 2;
            
//         result = a*b;

        
//         return result;
//     }

//     console.log(mult());

//     let result2;

//     result2 = mult() * 2;

//     console.log(result2);

// }



// window.onload = () =>{

//     const arr = [2,45,34,2]
//     let soma = 0;

//    arr.forEach(element => {

//     soma = soma + element

//     return soma;
//    });

//    console.log(soma/arr.length);

// }


// window.onload = () => {

//     const arr = [1,2,4,5,6,7,6,54,423,434];

//     arr.forEach(element => {
//        console.log(element) 
//     });


// }



window.onload = () =>{

    const test = new Test;
    console.log(test.shownumeber());
}


class Test{
    constructor(){

    }

    shownumeber(){
        return 2 ;
    }
}