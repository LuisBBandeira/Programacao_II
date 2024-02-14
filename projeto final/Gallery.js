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

        this.#currentart = this.#artpieces.find(art => art.title === art.title);
        this.#currentart.active = true;
        document.querySelector("h2").innerText = this.#currentart.title;
        
        this.#callback(art);
    }

    showArt() {
        this.#artpieces.forEach(art => {
            console.log(art.introduce());
        });
    }

    getArt(title) {
        return this.#artpieces.find(art => art.title === title);
    }  
}