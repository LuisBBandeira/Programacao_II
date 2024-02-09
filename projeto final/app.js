import {menu} from "./Menu.js";

window.onload = async () => {
    const request = await fetch("data.json");
    const result = await request.json();
    
    menu();
   
}