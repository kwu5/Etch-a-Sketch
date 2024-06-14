


function mouseOver (){
    console.log(this.className);
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    this.style.backgroundColor = "#"  + randomColor;
}


const create_grid= (squaresPerSide) =>{
    
    container.replaceChildren();
    
    for(let i=0;i<squaresPerSide;i++){
        const col = document.createElement('div');
        col.className = 'col';
        
        for(let j=0;j<squaresPerSide;j++){
            const unit = document.createElement('div');
            unit.className = 'unit';
            unit.addEventListener("mouseover", mouseOver);
            col.appendChild(unit);
        }
        container.appendChild(col);
    }   
}

const container = document.querySelector(".container");



const reset= () =>{
    let number = 16;
    let counter = 0;
    while(true ){
        const input = prompt("please enter the number of squares per side","16");
        const regex = /^[0-9]+$/;
        if(regex.test(input)){
            number = parseInt(input);
            break;
        };
        counter ++;
        if(counter == 3){
            break;
        }
    }
    create_grid(number);
}

const actionPad = document.querySelector(".action-pad");

const button_reset = document.createElement("button");
button_reset.textContent = "Reset";
button_reset.addEventListener("click",reset )
actionPad.appendChild(button_reset);



//default 16 grids
create_grid(16);