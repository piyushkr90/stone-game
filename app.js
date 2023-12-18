let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompChoice = () => {
      // rock ,paper ,scissor
      const options = ["rock","paper","scissors"];
      const randIdx = Math.floor(Math.random() * 3);
      return options[randIdx];
}
  const drawGame = () =>{
    console.log("game was draw");
    msg.innerText="game was draw play again";
    msg.style.backgroundColor="yellow";
  }
  //agar user jitega to kya show karna hai kaise karna hai
    const showWinner =(userWin,userChoice,compChoice) => {
        if(userWin){
            userScore++
            userscorepara.innerText=userScore;
            msg.innerText=`you win!  your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor ="green";
        }
        else{
            console.log("you lose");
            comScore++;
            compscorepara.innerText=comScore;
            msg.innerText=`you lose ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor ="red";
        }

    }

const playGame = (userChoice) => {
    console.log("USER CHOICE =",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice =",compChoice);
    //genetrate computer choice iske liye bhi fn bNAO
    if(userChoice === compChoice){
              drawGame();
    }
    else{
        let userWin= true;
        if(userChoice==="rock"){
          // do hi choices hai paper or scissor
          userWin = compChoice === "paper" ? false : true; 
        }
        else if( userChoice==="paper"){
            userWin =userChoice === "scissors"?false:true;
        }
        else{
            //scissor hai user ki choice
            userWin= userChoice=== "rock" ? false : true;
        }
        //fn bana lo ki user jita ki nhi jita
        showWinner(userWin,userChoice,compChoice);
    }
};
//start yaha se hua tha click karne pe kya kya hoga;
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    });
});
