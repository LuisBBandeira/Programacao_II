import ArtPiece from "./ArtPiece.js"

export default class Painting extends ArtPiece{

    #artist
    #medium
    constructor(data, callback) {
        super(data, callback);

        this.#artist = data.artist;
        this.#medium = data.medium;
    }
    

    introduce(){
        let parentIntroduce = super.introduce(); 
        return `title: ${parentIntroduce} 
                artist: ${this.#artist} 
                medium: ${this.#medium}`;
    }
    
}