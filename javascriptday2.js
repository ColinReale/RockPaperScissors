let hands = ["rock", "paper", "scissors"];

function getHand(){
    let index = parseInt(Math.random()*10)%3;
    return hands[index];
}

let player1 = {
    Name: 'Charlie',
    getHand: () => getHand()
    }
  

  let player2 = {
    Name: "Desmond",
    getHand: () => getHand()
    }
  


  function playRound(player1, player2){
    let hand1 = player1.getHand();
    let hand2 = player2.getHand();
    let result = "";
      if (hand1 == hand2){
       console.log("it's a tie")

      }else if (hand1 == "rock" && hand2 == "scissors") {
         result = player1.Name;
        console.log("player1 wins")
      }
    
      else if (hand1 == "scissors" && hand2 == "paper") {
        result = player1.Name;
        console.log("player1 wins")
      }
    
      else if (hand1 == "paper" && hand2 == "rock") {
        result = player1.Name;
        console.log("player1 wins")
      }
    
      else if (hand1 == "scissors" && hand2 == "rock") {
        result = player2.Name;
        console.log("player2 wins")
      }
    
      else if (hand1 == "paper" && hand2 == "scissors") {
        result = player2.Name;
        console.log("player2 wins")
      }
    
      else if (hand1 == "rock" && hand2 == "paper") {
        result = player2.Name;
        console.log("player2 wins")
      }
      return result;
      
  }

  console.log(playRound(player1,player2));

  function playGame(){
      
  }