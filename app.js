let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let colors=["red","yellow", "green","purple"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        document.title='Simon Says Game';
        started=true;
        levelUp();
    }
    
});

function btnFlash(btn){
    btn.classList.add("flash"); 
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
        
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let ranIdx=Math.floor(Math.random()*4);
    let ranColor=colors[ranIdx];
    gameseq.push(ranColor);
    let ranBtn=document.querySelector(`.${ranColor}`);
    btnFlash(ranBtn);
}
function checkBtn(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your score is:<b style="color:green">${level-1}</b><br> 
        <h2>Press any key to start.</h2>`;
        h2.style.color="red";
        document.title='Game Over';
       score();
        // reset();

    }
    
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkBtn(userseq.length-1);

}
function score(){
    let highest=0;
    
    reset();
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}



