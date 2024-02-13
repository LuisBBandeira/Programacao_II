import Painting from "./Painting.js";
import Photo from "./Photo.js";
import Sculpture from "./Sculpture.js";

export default class Gallery  {

    #artpieces;
    #callback;
    #currentart = null;
    constructor(callback) {
        this.#artpieces = [];
        this.#callback = callback;
    }
    addArt(art) {
        let nextart = null;
        switch (art.type) {
            case "painting":
                nextart = new Painting(art, () => this.#performart(nextart));
                break;
            case "photo":
                nextart = new Photo(art, () => this.#performart(nextart));
                break;
            case "sculpture":
                nextart = new Sculpture(art, () => this.#performart(nextart));
                break;
            default:
                break;
        }
        this.#artpieces.push(nextart)
    }

    

    #performart(art) {
        if(this.#currentart) {
            this.#currentart.active = false;
        }

        this.#currentart = this.#artpieces.find(art => art.name === art.name);
        this.#currentart.active = true;
        document.querySelector("h2").innerText = this.#currentart.name;
        
        this.#callback(art);
    }

    showArt() {
        this.#artpieces.forEach(art => {
            console.log(art.introduce());
        });
    }

    getArt(name) {
        return this.#artpieces.find(art => art.name === name);
    }

    images(type) {
        const arr = this.#artpieces.filter((item) => item.type === type);
        console.log(arr);
        return arr;
    }

    
}