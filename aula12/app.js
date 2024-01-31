
import AudioPlayer from "./AudioPlayer.js";
import Zoo from "./Zoo.js";

window.onload = async () => {

    const request = await fetch("data.json");
    const result = await request.json();

    const zoo = new Zoo((animal) => {
        console.log("zoo event" , animal);
        audioPlayer.play(animal.sound)
    });
    result.forEach(item => {
        zoo.addAnimal(item);
    });


    const audioPlayer = new AudioPlayer();
}