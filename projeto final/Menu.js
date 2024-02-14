import Gallery from "./Gallery.js";

const gallery = new Gallery();

export const menu = () => {
    const header = () =>{
        const body = document.querySelector("body");
        const newHeader = document.createElement("header");
        body.appendChild(newHeader);
        const h1 = document.createElement("h1");
        h1.className = "title"
        newHeader.appendChild(h1);
        h1.innerText = "Gallery";
    }
    header();

    const divBtns = () => {
        const body = document.querySelector("body");
        const newDiv = document.createElement("div");
        body.appendChild(newDiv);
        newDiv.className = "btns";
    }
    divBtns();

    const backDiv = () => {
        const body = document.querySelector("body");
        const newDiv = document.createElement("div");
        body.appendChild(newDiv);
        newDiv.className = "none";
        newDiv.id = "goBack";
    }

    backDiv();


    const showDiv = () => {
        const body = document.querySelector("body");
        const newDiv = document.createElement("div");
        body.appendChild(newDiv);
        newDiv.className = "none";
        newDiv.id = "showDiv";

        return newDiv
    }

    const show = showDiv();

    const image = () => {
        const div = document.querySelector("#showDiv");
        const newImage = document.createElement("div");
        div.appendChild(newImage);
        newImage.id = "images-container"
    }

    image()

    const textInfo = () => {
        const div = document.querySelector("#showDiv");
        const newH2 = document.createElement("h2");
        div.appendChild(newH2);
        newH2.id = "textInfo";
    }

    textInfo();

    const btn_reset = () =>{
        const div = document.querySelector("#showDiv");
        const button = document.createElement("button");
        div.appendChild(button);
        button.className = "none";
        button.innerText = "go back";
    }

    btn_reset();




    const backArrow = () =>{
        const returnDiv = document.getElementById("goBack");
        const btn = document.createElement("button");
        returnDiv.appendChild(btn);
        btn.className = "bArrow";

        return returnDiv
    }

    const returnDiv = backArrow();

    let arrBtns = ["painting", "photo", "sculpture"];

    const btns = () =>{
        const div = document.querySelector("div");
        arrBtns.forEach(type => {
            const btn = document.createElement("button");
            div.appendChild(btn);
            btn.innerText = type;
            btn.className = type + "_btn";
        });
        return div
    }
    const div = btns();
    
    const btn1_none = document.querySelector(".painting_btn");
    btn1_none.onclick = () => {
        div.className = "none";
        returnDiv.className = "goBack";
        show.className = "showDiv";
        const photo = document.querySelectorAll('div.photo');
        photo.forEach(photo => photo.className = "none");
        const sculpture = document.querySelectorAll('div.sculpture');
        sculpture.forEach(sculpture => sculpture.className = "none");
    }

    const btn2_none = document.querySelector(".photo_btn");
    btn2_none.onclick = () => {
        div.className = "none";;
        returnDiv.className = "goBack";
        show.className = "showDiv";
        const painting = document.querySelectorAll('div.painting');
        painting.forEach(painting => painting.className = "none");
        const sculpture = document.querySelectorAll('div.sculpture');
        sculpture.forEach(sculpture => sculpture.className = "none");
    }

    const btn3_none = document.querySelector(".sculpture_btn");
    btn3_none.onclick = () => {
        div.className = "none";
        returnDiv.className = "goBack";
        show.className = "showDiv";
        const painting = document.querySelectorAll('div.painting');
        painting.forEach(painting => painting.className = "none");
        const photo = document.querySelectorAll('div.photo');
        photo.forEach(photo => photo.className = "none");
    }

    const btnBack_none = document.querySelector(".bArrow");
    btnBack_none.onclick = () => {
        returnDiv.className = "none";
        show.className = "none";
        div.className = "btns";
        const painting = document.querySelectorAll('div#painting');
        painting.forEach(painting => painting.className = "painting");
        const photo = document.querySelectorAll('div#photo');
        photo.forEach(photo => photo.className = "photo");
        const sculpture = document.querySelectorAll('div#sculpture');
        sculpture.forEach(sculpture => sculpture.className = "sculpture");
        const newH2 = document.querySelector("h2");
        newH2.innerHTML = "";
    }

    // const btn_ptn1 = document.querySelector('ptn1');
    // const btn_ptn2 = document.querySelector('ptn2');
    // const btn_ptn3 = document.querySelector('pt3');
    // btn_ptn1.onclick = () =>{
    //     document.querySelector('ptn2').style.zIndex = "-1"
    //     document.querySelector('pt3').style.zIndex = "-1"
    //  }

 }
