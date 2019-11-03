var playGameBtn = document.querySelector("#play-game");
var playerGreeting = document.querySelector("#greeting")
var player1Name = document.querySelector("#player-1")
var player2Name = document.querySelector("#player-2")
var warning = document.querySelector(".warning")

// playGameBtn.addEventListener("click", showInstructions);

function showInstructions(){
  document.querySelector(".player-form").classList.add("hidden")
  document.querySelector(".game-instructions").classList.remove("hidden")
  playerGreeting.innerText= `WELCOME ${player1Name.value} AND ${player2Name.value}!`.toUpperCase()
}

function enableGameBtn() {
  // event.preventDefault();
  if (player1Name.value === "") {
    console.log("test works");
    warning.innerHTML = "You must enter a name";
  } else {
    showInstructions();
  }
}

playGameBtn.addEventListener("click", enableGameBtn)
