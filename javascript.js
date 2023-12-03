const container = document.querySelector(".grid-container")

let x = 16;

container.style.setProperty("--columns", x);

for (let i = 0; i < x * x; i++) {
    const div = document.createElement("div");
    div.classList.add("flex-item");
    container.appendChild(div);
}

// makes 16*16 squares on the screen



// adds the random color


function makeRandomColor(){
    const maxNumber = 256;
    let red = getRandomNumber(maxNumber);
    let green = getRandomNumber(maxNumber);
    let blue = getRandomNumber(maxNumber);

    return "rgb("+red+","+green+","+blue+")"
}

function getRandomNumber(max){
    let randomNumber = Math.floor(Math.random()*max);
    return randomNumber;
}


function handleHover(event) {
    if (event.target.classList.contains("flex-item")) {
        event.target.style.backgroundColor = makeRandomColor();
    }
}



function handleMouseOut(event) {
    if (event.target.classList.contains("flex-item")) {
        event.target.style.backgroundColor = "gray";
    }
}

container.addEventListener("mouseover", handleHover);
container.addEventListener("mouseout", handleMouseOut);














// controlls the button that asks how many squares you want

const button = document.querySelector(".button1");
button.addEventListener("click", function(){
    let squares = prompt("how many x*x squares do you want?")

    let y = parseInt(squares);

    if(y <= 0 || isNaN(y)){
        alert("not a valid number")
    }
    if (y > 100 ){
        alert("number to high, cant go over 100");
    }
    else{
        container.style.setProperty("--columns", y);

        container.innerHTML = "";

        for (let i = 0; i < y * y; i++) {
            const div = document.createElement("div");
            div.classList.add("flex-item");
            container.appendChild(div);
        }
    }
      
})


