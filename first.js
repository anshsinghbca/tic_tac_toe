let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;
let winpoint=[
    [0,1,3],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=()=>{
    turno=true;
enablebtn();
msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turno){
        box.innerText="o";
        turno=false;
        }
        else{
            box.innerText="x";
            turno=true;
        }
         
        box.disabled=true;
         checkpatterns();

    });
});
const disbalebtn=()=>{
    for(box of boxes) {
        box.disabled=true;
    }};

    const enablebtn=()=>{
        for(box of boxes) {
            box.disabled=false;
            box.innerText="";
        }};

const showWinner=(winner)=>{
    msg.innerText= 'congratulation you are winner';
    msgcontainer.classList.remove("hide");
    disbalebtn();
    
}

const checkpatterns=()=>{
    for(let check of winpoint){
    let pos1val=boxes[check[0]].innerText;
    let pos2val=boxes[check[1]].innerText;
    let pos3val=boxes[check[2]].innerText;

    if(pos1val!="" && pos2val!=""&& pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){

            console.log("winner",pos1val);
            showWinner(pos1val);

         

        }}}};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

     