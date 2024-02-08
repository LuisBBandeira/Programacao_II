
window.onload = async () => {
    const request = await fetch("data.json");
    const result = await request.json();

    header()
    divBtns()
    
}

const header = () =>{
    const body = document.querySelector("body");
    const newHeader = document.createElement("header");
    body.appendChild(newHeader);
    const h1 = document.createElement("h1");
    h1.className = "title"
    newHeader.appendChild(h1);
    h1.innerText = "Gallery";
}

const divBtns = () => {
    const body = document.querySelector("body");
    const newDiv = document.createElement("div");
    body.appendChild(newDiv);
    newDiv.className = "btns"
}




