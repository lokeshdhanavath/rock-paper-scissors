let userScore = 0;
let compScore = 0;
let divs = document.querySelectorAll(".choice");
let usc  = document.querySelector("#user-score");
let csc = document.querySelector("#comp-score");
let msg = document.querySelector("h2");
let msgbg = document.querySelector(".result");







let gencomp = () => {
    let options = ["rock","paper","scisors"] ;
    computer = options[Math.floor(Math.random() * 3)];
    return computer;        
}
 
let game = (userChoice) => {
    console.log(userChoice);
    let compChoice = gencomp();
    console.log(compChoice);
    showWinner(userChoice,compChoice);   
}

let showWinner = (userChoice,compChoice) => {
    if (userChoice == compChoice){
        console.log("draw");
        drawMatch();
    }
    else if (userChoice == "rock"){
         if (compChoice == "scisors"){
            console.log("yow won");
            userWon();
         }
         else {
            console.log("you lost");
            compWon();
         }
    }
    else if (userChoice == "paper"){
        if (compChoice == "scisors"){
           console.log("yow lost");
           compWon();
        }
        else {
           console.log("you won");
           userWon();
        }
   }
    else {
        if (compChoice == "rock"){
        console.log("yow lost");
        compWon();
        }
        else {
        console.log("you won");
        userWon();
        }   
    }
}

let userWon = () => {
      usc.innerText = userScore + 1;
      userScore++;
      msg.style.Color = "white";
      msg.innerHTML = "<i>You have won the match</i>";
      msgbg.style.backgroundColor = "green";
}

let compWon = () => {
    csc.innerText = compScore + 1;
    compScore++;
    msg.style.color = "white";
    msg.innerText = "You have lost the match";
    msgbg.style.backgroundColor = "red";
}

let drawMatch = () => {
    msg.innerText = "The match was tied";
    msg.style.color = "white";
    msgbg.style.backgroundColor = "rgb(27, 119, 212)";
}





divs.forEach((x) => {
        x.addEventListener("click",() =>{
        let userChoice = x.getAttribute("id");
        game(userChoice);
        });
    });