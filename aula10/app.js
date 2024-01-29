// window.onload = async() => {
//     /**
//      * -- Declaração e Manipulação de Variáveis --
//      * Declara duas variáveis, (a , b) e atribui-lhes um valor.
//      * Troca os valores de a e b sem usar uma variável temporária.
//      * Faz console.log dessas 2 variáveis.
//      */
//     let a = 10
//     let b = 20

//     a = 3
//     b = 4

//     console.log("Valor de a:" , a);
//     console.log("Valor de a:" , b);



//     /**
//      * -- Instruções Condicionais --
//      * Escreve uma função (isEven, por ex.) que recebe um parâmetro numérico.
//      * O resultado dessa função verifica se o número é par ou ímpar.
//      * Faz console.log desse resultado.
//      */

//     const isEven = (num) =>{
//         if (num % 2 === 0) {
//             console.log(num , "é um numero par.");
//         }else{
//             console.log(num , "é um numero impar.");
//         }
//     }

//     isEven(a)


//     /**
//      * -- Arrays --
//      * Escreve uma função que recebe um array de 5 números (por ex: [2, 123, 34, 65, 48]).
//      * Itera sobre esse array e faz console.log apenas dos números pares.
//      */

//     arr = [2, 123, 34, 65, 48];

//     const Par  = (arr) =>{

//         arr.forEach(element => {
//             if (element % 2 === 0) {
//                 console.log(element , "é par")
//             }
            
//         });
//     }

//     Par(arr);



//     /**
//      * -- Funções --
//      * Escreve uma função que recebe dois parâmetros, num1, num2, e retorna a soma deles.
//      * Faz console.log desse resultado.
//      */

//     let num1 = 10
//     let num2 = 15

//     const Soma = (num1, num2) => {
//         return num1 + num2;
//     }

//     console.log(Soma(num1,num2) , "é a soma dos dois parâmetros");



//     /**
//      * -- Objetos --
//      * Cria um objeto que represente uma pessoa com as  propriedades nome, idade e genero.
//      * Faz console.log dessas propriedades.
//      */

//     let person = {
//         name : "luis",
//         age: 18,
//         gender: "male"
//     }

//     console.log("Name:" ,person.name);
//     console.log("Age:" , person.age);
//     console.log("Gender:" , person.gender);





//     /**
//      * -- Loops --
//      * Escreve um for loop que imprime a sequência de Fibonacci até um número específico de items (10, por ex.).
//      * Faz console.log a cada iteração.
//      */

//     const fibonaci = () =>{
    
//         for (let i = 2; i <= 10; i++) {
//             const  temp = a;
//             a = a + b;
//             b = temp;
//             console.log(a);
                
//         }
        
        
//         for (let i = 0; i < 10; i++) {
//             b = a;
//             a = a += a;
//             console.log(b);
//         }
        
//     }
        
//     fibonaci();



//     /**
//      * -- Manipulação do DOM --
//      * No ficheiro index.html, cria dois elementos do tipo <button> e <p> dentro do  <body>.
//      * Cria um evento onclick no botão que quando “clicado”, insere o texto “button clicked” no elemento <p>.
//      */

//     const button = document.querySelector("button")
//     const p = document.querySelector("p")
//     button.onclick = () =>{
//         p.innerText = "clicado"
//     }

//     /**
//      * -- Async/Await e Fetch --
//      * Cria uma função (loadData, por ex) que faça fetch do ficheiro “data.json”
//      * e transforme o resultado desse fetch em formato json.
//      * Faz console.log desse json.
//      */

//     const loadData = async(url) =>{
//         const request = await fetch(url);
//         const result = await request.json();
    
//         return result;
//     }

//     const data =  await loadData("data.json");


//     console.log(data);
// }

// window.onload = () => {

//     const test = new Test ("test1" ,(value) =>{
//         h1.innerText = value
//     });
//     test.width = 100;
//     test.height = 150;
//     test.background = "red";

//     const h1 = document.querySelector("h1");
// }


// class Test{

//     #name;
//     #age;
//     #gender;

//     #view;
//     #callbalck;

//     constructor(name,callback){

//         this.#name = name

//         this.#callbalck = callback

//         this.#view = document.createElement("div");
//         document.body.appendChild(this.#view)
//         this.#view.onclick =() =>{
//             this.#callbalck(this.#name + "clicked");
//         }
//     }

//     get width(){
//         return this.#view.style.width.replace("px" , "");
//     }

//     set width(value){
//         this.#view.style.width = value + "px";
//     }

//     get height(){
//         return this.#view.style.height.replace("px" , "");
//     }

//     set height(value){
//         this.#view.style.height = value + "px";
//     }

//     get background(){
//         return this.#view.style.background = ("")
//     }

//     set background(value){
//         this.#view.style.background = value
//     }

//     getName(){

//         return this.#name;
//     }

//     getAge(){

//         return this.#age;
//     }

//     getGender(){

//         return this.#gender;
//     }

//     setName(value){
//         this.#name = value
//     }

//     setage(value){
//         this.#age = value
//     }

//     setGender(value){
//         this.#gender = value
//     }
// }

window.onload = () => {
    const test = new Test2 (() =>{
        h1.innerText = "test2.clicked"
    });
    test.width = 100;
    test.height = 150;
    test.background = "red";
    const h1 = document.querySelector("h1");
}

class Test2{

    #view


    constructor(callback){
        this.#view = document.createElement("div");
        this.#view.onclick = () => callback()

        document.body.appendChild(this.#view)
        
    }

    get width(){
        return this.#view.style.width.replace("px" , "");
    }

    set width(value){
        this.#view.style.width = value + "px";
    }

    get height(){
        return this.#view.style.height.replace("px" , "");
    }

    set height(value){
        this.#view.style.height = value + "px";
    }

    get background(){
        return this.#view.style.background = ("")
    }

    set background(value){
        this.#view.style.background = value
    }

}



