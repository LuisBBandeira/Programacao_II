import Gallery from "./Gallery.js";
import {menu} from "./Menu.js";

window.onload = async () => {
    const request = await fetch("data.json");
    const result = await request.json();
    
    menu();

    const gallery = new Gallery((art) =>{
        document.querySelector("h2").innerText = art.introduce();
        console.log(art);
    });

    result.forEach(item => {
        gallery.addArt(item);
    });

}


