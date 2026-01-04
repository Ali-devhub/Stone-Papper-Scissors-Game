let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];

};


const playGame = (choice) => {
    console.log(`User Choice = ${choice}`); //user choice
    const compChoice = genCompChoice();
     console.log(`Comp Choice = ${compChoice}`); //user choice
    calScore(choice, compChoice);

};


choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       // console.log(`Option was selected with id ${userChoice}`);
        playGame(userChoice);

    });
});
let userWin = false;
const calScore = (userChoice, compChoice) => {
   if (userChoice === "rock" && compChoice === "paper") {
    userWin = false;
    compScore++;
    updateScore();
    }
    
    
    else if (userChoice === "rock" && compChoice === "scissor") {
        userWin = true;
        userScore++;
        console.log(`user score= ${userScore} comp score= ${compScore}`);
        updateScore(userChoice, comChoice);
    }

    else if (userChoice === "paper" && compChoice === "rock") {
          userWin = true;
        userScore++;
        console.log(`user score= ${userScore} comp score= ${compScore}`);
         updateScore(userChoice, compChoice);
    }
    
    else if (userChoice === "paper" && compChoice === "scissor") {
        userWin = false;
        compScore++;
         console.log(`user score= ${userScore} comp score= ${compScore}`);
           updateScore(userChoice, compChoice);
    }
    
    else if (userChoice === "scissor" && compChoice === "rock") {

        userWin = false;
        compScore++;
         console.log(`user score= ${userScore} comp score= ${compScore}`);
           updateScore(userChoice, compChoice);
    }
    
    else if (userChoice === "scissor" && compChoice === "paper") {
          userWin = true;
        userScore++;
         console.log(`user score= ${userScore} comp score= ${compScore}`);
           updateScore(userChoice, compChoice);
    }
    else {
         console.log(`user score= ${userScore} comp score= ${compScore}`);
         showDraw();
    }

    
};

const updateScore = (userChoice, compChoice) => {
    let userScoreTracker = document.querySelector("#user-score").innerText = userScore;
    let compScoreTracker = document.querySelector("#comp-score").innerText = compScore;
    showWinner(userWin, userChoice, compChoice);
};

const showWinner = (userWon, userChoice, compChoice) => {
    if (userWon) {
        console.log(`user has won the match`);
        msg.innerText= `You win! your ${userChoice} beats ${compChoice}`;
        
        msg.style.backgroundColor = "green";
    }
    else {
        console.log(`user has lost the match`);
        msg.innerText= `You lost! ${compChoice} beats your ${userChoice}  `;
         msg.style.backgroundColor = "Red";
    }
};

const showDraw = () => {
    console.log("Both reaches to draw");
    msg.innerText= "it's a draw, Play Again!";
    msg.style.backgroundColor = "black";

};