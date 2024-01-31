export default class AudioPlayer{

    #audio

    constructor(){
        this.#audio = document.querySelector("audio")

        const button = document.querySelector("audio");
        button.onclick = () => {
            this.stop();
        }
    }

    play(src){

        this.#audio.src = src;
        this.#audio.play();
    }


    stop(){
        this.#audio.pause();
    }

}