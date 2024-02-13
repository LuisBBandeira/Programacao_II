export default class ArtPiece{
    #callback;
    #imageElem;
    #data;
    
    constructor(data, callback) {
        this.#data = data;
        this.#callback = callback;

        this.#imageElem = document.createElement("img");
        this.#imageElem.src = this.#data.image;
        this.#imageElem.onclick = () => this.#callback();

        const container = document.querySelector("#images-container");
        const a = document.createElement("a")
        container.appendChild(a)
        a.appendChild(this.#imageElem);
        a.className = this.#data.type
    }

    get data() {
        return this.#data;
    }

    get type() {
        return this.#data.type;
    }

    get artist() {
        return this.#data.artist;
    }

    set artist(value) {
        this.#data.artist = value;
    }

    get title() {
        return this.#data.title;
    }
}