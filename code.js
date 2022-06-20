//need sound
var cscore =0//computer score
var hscore =0//human score
function playround(pselc){
    const x = Math.floor(Math.random() * (3 - 1 + 1) + 1);//rock is 1 paper is 2 and scissors is 3
    if ((x==1)&&(pselc==="paper")){
        
        hscore++
        return ("You Win! Paper beats Rock")
    }
    else if((x==3)&&(pselc==="paper")){
        cscore++
        return ("You Lose! Scissors beats Paper");
    }
    else if((x==2)&&(pselc==="rock")){
        cscore++
        return "You Lose! Paper beats Rock";
    }
    else if((x==3)&&(pselc==="rock")){
        hscore++    
        return "You Win! Rock beats Scissors";
    }
    else if((x==1)&&(pselc==="scissors")){
        cscore++
        return ("You Lose! Rock beats Scissors")
    }
    else if((x==2)&&(pselc==="scissors")){
       
        hscore++
        return("You Win! Scissors beats Paper")
    }
    else{
        return "draw";
    }
}
function display(winner){
    document.getElementById('result').textContent = winner;
    const x = checkwinner();
    if (x == 1){
        const audio = document.querySelector(`audio[data-key="1"]`);//weird error need quotation between number
        audio.play();
    }
    else if(x == 2){
        const audio = document.querySelector(`audio[data-key="2"]`);
        audio.play();
    }
}
function playr(){
    display(playround("rock"));
    document.getElementById('a').textContent = hscore;
    document.getElementById('b').textContent = cscore;
}
function plays(){
    display(playround("scissors"));
    document.getElementById('a').textContent = hscore;
    document.getElementById('b').textContent = cscore;
}
function playp(){
    display(playround("paper"));
    document.getElementById('a').textContent = hscore;
    document.getElementById('b').textContent = cscore;
}
function checkwinner(){
    if (hscore>=5){
        alert("you won the game gg")
        hscore = 0;
        cscore = 0;
        document.getElementById('a').textContent = hscore;
        document.getElementById('b').textContent = cscore;
        return 1;
    }
    else if(cscore >=5 ){
        alert("you lost the game gg")
        hscore = 0;
        cscore = 0;
        document.getElementById('a').textContent = hscore;
        document.getElementById('b').textContent = cscore;
        return 2;
    }
}
