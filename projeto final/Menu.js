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

    const backArrow = () =>{
        const returnDiv = document.getElementById("goBack") 
        const btn = document.createElement("button")
        returnDiv.appendChild(btn)
        btn.className = "bArrow"

        return returnDiv
    }

    const returnDiv = backArrow();

    let arrBtns = ["painting", "photo", "sculpture"];

    const btns = () =>{
        const div = document.querySelector("div")
        arrBtns.forEach(type => {
            const btn = document.createElement("button")
            div.appendChild(btn)
            btn.innerText = type;
            btn.className = type + "_btn";
        });
        return div
    }
    const div = btns();

    const btn1_none = document.querySelector(".painting_btn");
    btn1_none.onclick = () => {
        div.className = "none";
        returnDiv.className = "goBack"

    }

    const btn2_none = document.querySelector(".photo_btn");
    btn2_none.onclick = () => {
        div.className = "none";
        returnDiv.className = "goBack"
    }

    const btn3_none = document.querySelector(".sculpture_btn");
    btn3_none.onclick = () => {
        div.className = "none";
        returnDiv.className = "goBack"

    }

    const btnBack_none = document.querySelector(".bArrow");
    btnBack_none.onclick = () => {
        returnDiv.className = "none"
        div.className = "btns"
    }
 }
