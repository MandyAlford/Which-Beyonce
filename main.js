var playGameBtn = document.querySelector("#play-game");
var playerGreeting = document.querySelector("#greeting")
var player1Name = document.querySelector("#player-1")
var player2Name = document.querySelector("#player-2")
var warning = document.querySelector(".warning")


function showInstructions(){
  document.querySelector(".player-form").classList.add("hidden")
  document.querySelector(".game-instructions").classList.remove("hidden")
  playerGreeting.innerText= `WELCOME ${player1Name.value}!`.toUpperCase()
}

function enableGameBtn() {
  if (player1Name.value === "") {
    warning.innerHTML = "You must enter a name";
  } else if(this.haveInstructionsBeenShown === true) {
    document.querySelector(".game-instructions").classList.add("hidden")
    playGameBtn.classList.add("hidden")
    document.querySelector("main").style.background = "#F5F7F6"
    document.querySelector(".card-section").classList.remove("hidden")
    buildCards()
  } else {
    this.haveInstructionsBeenShown= true;
    showInstructions();
  }
}

var deck = new Deck([
  new Card("card-a", "assets/bey1.jpg", "Bey1"),
  new Card("card-b", "assets/bey2.jpg", "Bey2"),
  new Card("card-c", "assets/bey3.jpg", "Bey3"),
  new Card("card-d", "assets/bey4.jpg", "Bey4"),
  new Card("card-e", "assets/bey5.jpg", "Bey5"),
  new Card("card-f", "assets/bey1.jpg", "Bey1"),
  new Card("card-g", "assets/bey2.jpg", "Bey2"),
  new Card("card-h", "assets/bey3.jpg", "Bey3"),
  new Card("card-i", "assets/bey4.jpg", "Bey4"),
  new Card("card-j", "assets/bey5.jpg", "Bey5"),
])

function buildCards(){
  var cardWrapper = document.querySelector(".card-wrapper")
  for (var i = 0; i < deck.cards.length; i++){
    cardWrapper.innerHTML += `
    <div class="memory-card" id=${deck.cards[i].id}>
      <img class="back-face" src="assets/card-front.png" alt="B"/>
        <img class="front-face" src=${deck.cards[i].frontFaceSrc} alt=${deck.cards[i].matchInfo}/>
    </div>
    `
  }

  const cards = document.querySelectorAll('.memory-card');
  cards.forEach(card => addEventListener('click', flipCard))
}

playGameBtn.addEventListener("click", enableGameBtn)

function flipCard(event){
  event.target.parentElement.classList.toggle('flip');
}
