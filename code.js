var cscore =0
var hscore =0
function playround(pselc){
    const x = Math.floor(Math.random() * (3 - 1 + 1) + 1);//rock is 1 paper is 2 and scissors 
    
    
    if ((x==1)&&(pselc==="paper")){
        alert("You Win! Paper beats Rock")
        hscore++
    }
    else if((x==3)&&(pselc==="paper")){
        alert("You Lose! Scissors beats Paper")
        cscore++
    }
    else if((x==2)&&(pselc==="rock")){
        alert("You Lose! Paper beats Rock")
        cscore++
    }
    else if((x==3)&&(pselc==="rock")){
        alert("You Win! Rock beats Scissors")
        hscore++    
    }
    else if((x==1)&&(pselc==="scissors")){
        alert("You Lose! Rock beats Scissors")
        cscore++
    }
    else if((x==2)&&(pselc==="scissors")){
        alert("You Win! Scissors beats Paper")
        hscore++
    }
    else{
        alert("draw")
    }
}
function playr(){
    console.log(playround("rock"));
    document.getElementById('a').innerHTML = hscore;
    document.getElementById('b').innerHTML = cscore;
}
function plays(){
    console.log(playround("scissors"));
    document.getElementById('a').innerHTML = hscore;
    document.getElementById('b').innerHTML = cscore;
}
function playp(){
    console.log(playround("paper"));
    document.getElementById('a').innerHTML = hscore;
    document.getElementById('b').innerHTML = cscore;
}
