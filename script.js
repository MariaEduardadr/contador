const input = document.querySelector("#input");
const counter = document.querySelector(".couter");
const toggleButton = document.querySelector("#toggle");

let mode = "caracters"

toggleButton.addEventListener("click", () =>{

    if(mode === "caracters") {
        mode = "word"
        toggleButton.textContent = "Contar caracters";
    }
    else{
        mode = "word"
        toggleButton.textContent = "Contar palavras";
    }
    input.dispatchEvent(new Event("input"));
})

input.addEventListener("input", () => {
    let count = 0;
    if(mode === "caracters"){
        count = input.value.length;
        counter.textContent=`${count} caractere(s)`;
    }
    else{
        const words = input.value.trim().split(/\s+/);
       count = input.value.trim() ===  " " ? 0 : words.length;
       counter.textContent = `${count} palavras(s)`; 
    }
})