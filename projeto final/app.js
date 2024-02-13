import Gallery from "./Gallery.js";
import {menu} from "./Menu.js";

window.onload = async () => {
    const request = await fetch("data.json");
    const result = await request.json();
    
    menu();

    const gallery = new Gallery((art) =>{
        console.log(art)
    });

    result.forEach(item => {
        gallery.addArt(item);
    });

    
    gallery.images(result.type);

}


