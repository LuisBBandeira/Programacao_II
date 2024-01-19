
import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";
import Vehicle from "./Vehicle.js";

const data ={
    
    cars:[
    {
        brand: "ferrari",
        speed: 200,
    },
    {
        brand: "fiat",
        speed: 50,
    }
    ],
    motorcycles:[
    {
        brand: "ducati",
        speed: 400,
    },
    {
        brand: "kawasaki",
        speed: 500,
    }
    ],

};

const vehicles = [];

window.onload = () =>{
    console.log("window loaded");
    const nav = document.querySelector("#menu");

    const createUL = (name ,data) =>{
        const ul = document.createElement("ul");
        const title = document.createElement("li");
        title.innerText = name;
        ul.appendChild(title);
        nav.appendChild(ul);

        data.forEach(element => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.onclick = (event) =>{
                switch (name) {
                    case "cars":
                        vehicles.push (new Car(data[index]));  
                        break;
                    case "Motorcycle":
                        vehicles.push (new Motorcycle(data[index]));
                        break;
                
                    default:
                        break;
                };

            };
            button.innerText = element.brand
            li.appendChild(button);
            ul.appendChild(li);
        });
    };

    for (const key in data) {
        createUL(key, data[key]);
    };
};



const car = new Car()
const motorcycle = new Motorcycle();