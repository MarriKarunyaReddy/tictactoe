let allbox = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnx = true;
let turny=false;
let turn = document.querySelector("#turn");
let turnc = document.querySelector(".turn");
let modebtn1 = document.querySelector("#mode");
let body= document.querySelector("body");
let a=0;
let cmode="OLIVEMODE";
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
turn.textContent="NOW ITS X TURN "
allbox.forEach(element => {
    element.addEventListener('click',()=>{
        console.log('box was clicked');
        if(turnx==true){
        element.textContent ="X";
        turnx=false;
        turny=true;
        turn.textContent="NOW ITS O's TURN "
        }
        else if(turny==true){
            element.textContent="O";
            turnx=true;
            turny==false;
            turn.textContent="NOW ITS X's TURN "
        }
        element.disabled=true;
        checkwinner();
    }) 
});
allbox.forEach(element => {
    element.addEventListener('dblclick',()=>{
        console.log('box was clicked');
        element.textContent=null;
    }) 
});
reset.addEventListener("click", () => {
    allbox.forEach(element => {
        element.textContent = null;
        element.disabled = false;
    });
    turnx = true;
    turny = false;
    turn.textContent = "NOW ITS X TURN ";
});
const checkwinner= () =>{
    for(let pattern of win){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(allbox[pattern[0]].innerText,allbox[pattern[1]].innerText,allbox[pattern[2]].innerText)
        let pos1val = allbox[pattern[0]].innerText;
        let pos2val = allbox[pattern[1]].innerText;
        let pos3val = allbox[pattern[2]].innerText;
        if(pos1val != ""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner");
                turn.textContent=`${pos1val} wins the game \n GAME OVER`;
                allbox.forEach(element => {
                    
                    element.disabled = true;
                });
            }
        }
    }
}

modebtn1.addEventListener("click",()=>{
    console.log("you are trying to change mode");
    if(cmode==="OLIVEMODE"){
        cmode="DARKMODE";
        console.log(`mode changed to ${cmode}`);
        body.classList.add("dark");
        body.classList.remove("olive");
        turnc.classList.add("turnc");
        modebtn1.textContent = "LIGHT";
    }else if(cmode==="DARKMODE"){
        cmode="LIGHTMODE";
        console.log(`mode changed to ${cmode}`);
        body.classList.add("light");
        body.classList.remove("dark");
        modebtn1.textContent = "OLIVE";
    }else if(cmode==="LIGHTMODE"){
        cmode="OLIVEMODE";
        console.log(`mode changed to ${cmode}`);
        body.classList.add("olive");
        body.classList.remove("light");
        modebtn1.textContent = "DARK";
    }
});
