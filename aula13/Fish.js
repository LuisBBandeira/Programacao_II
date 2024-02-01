import Animal from "./Animal.js";

export default class Fish extends Animal {

    #isFreshwater;
    constructor(data, callback) {
        super(data, callback);

        this.#isFreshwater = data.isFreshwater;
    }

    introduce() {

        let parentIntroduce = super.introduce();
        return this.#isFreshwater ? 
        parentIntroduce + " and I live in the sea" :
        parentIntroduce + " and I live in the river";
    }
}