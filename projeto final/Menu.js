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

    let arrBtns = ["painting", "photo", "sculpture"];

    const btns = () =>{
        const div = document.querySelector("div")
        arrBtns.forEach(type => {
            const btn = document.createElement("button")
            div.appendChild(btn)
            btn.innerText = type;
            btn.className = type + "_btn";
        });
    }
    btns();
}
