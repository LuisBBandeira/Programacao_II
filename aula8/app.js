window.onload = async () =>{

    const large = document.querySelector(".large");
    const small = document.querySelector(".small");


    large.onclick = () =>{
        small.dispatchEvent(new CustomEvent('small_event'));
    }

    small.addEventListener('small_event', () =>{
        console.log("div clicked");
    })
}

class Test{
    constructor(){

    }

    async onDataload(){
        const req = await fetch
    }
}

