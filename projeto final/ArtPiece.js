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
        container.appendChild(this.#imageElem);
    }
}