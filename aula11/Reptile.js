import Animal from "./Animal.js";

export default class Reptile extends Animal{


    #isAgressive

    constructor({name,isAgressive, image}){
        super(name, image);

        this.#isAgressive = isAgressive
    }

    bite(){
        return this.#isAgressive ?
        this.introduce() + " and i'm agressive":
        this.introduce() + " and i'm peacefull"
    }
} 