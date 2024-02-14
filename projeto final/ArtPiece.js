export default class ArtPiece {
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
    const div = document.createElement("div");
    container.appendChild(div);
    const a = document.createElement("a");
    div.appendChild(a);
    div.className = this.#data.type;
    div.id = this.#data.type;
    a.appendChild(this.#imageElem);
    a.className = this.#data.id;
  }

  introduce() {
    return this.#data.title;
  }

  get type() {
    return this.#data.type;
  }

  get image() {
    return this.#data.image;
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

  get id() {
    return this.#data.id;
  }

  get active() {
    return this.#imageElem.className.length !== 0;
  }
  set active(value) {
    this.#imageElem.className = value ? "active" : "";
  }
}
