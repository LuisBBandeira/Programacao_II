import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";
import Boat from "./Boat.js";

let currentVehicle;

const loadData = async (url) => {

    const request = await fetch(url);
    const result = await request.json();

    return result;
}

const createliContent = (item) => {

    const button = document.createElement("button");
    button.innerText = item.brand;


    button.onclick = () => {

        if (playButtom === "inactive") {
            playButtom.className = "green";
        }

        if (currentVehicle) {

            currentVehicle.destroy(); 
        }

        switch (item.type){
            case "car":
                currentVehicle = new Car(item);
             break;
            case "motorcycle":
                currentVehicle = new Motorcycle(item);
             break;
            case "boat":
                currentVehicle = new Boat(item);
             break;

        }

    }

    return button;
}

const createList = (data) =>{

    const ul = document.querySelector("ul");

    data.forEach(item => {
        const li = document.createElement("li");
        li.appendChild(createliContent(item));
        ul.appendChild(li);
    });


}

let isPlaying = null;
let playButtom;
// const play = () =>{
//     isPlaying = setInterval(()=>{
        
//         console.log("new animation frame");

//     }, 1000);
//     playButtom.className = "red"
//     playButtom.innerText ="Stop";

// }
// const stop = () =>{
//     clearInterval(isPlaying);
//     isPlaying = null;
//     playButtom.innerText = "Play";
//     playButtom.className = "green"
//     console.log("animation stopped")
// }

const animate = () =>{

    currentVehicle.animate();
    isPlaying = requestAnimationFrame(animate);
}

const playAnimation = () =>{
    isPlaying = requestAnimationFrame(animate);
    playButtom.innerText = "Stop";
    playButtom.className = "red";
}

const stopAnimation = () =>{
    cancelAnimationFrame(isPlaying);
    isPlaying = null;
    playButtom.innerText = "Play";
    playButtom.className = "green"
    console.log("animation stopped")
}


window.addEventListener("load", async () => {

    const data =  await loadData("data.json");
    const sorteData = data.sort((a,b) => a.type.localeCompare(b.type));

    const ul = createList(data);


    playButtom = document.querySelector("#play_pause");
    playButtom.onclick = () =>{

        isPlaying ? stopAnimation() : playAnimation();

    }


})

// window.onload = async () =>{

//     const data =  await loadData("data.json");
//     const sorteData = data.sort((a,b) => a.type.localeCompare(b.type));

//     const ul = createList(data);

// }