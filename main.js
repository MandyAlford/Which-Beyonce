var playGameBtn = document.querySelector("#play-game");
var playerGreeting = document.querySelector("#greeting")
var player1Name = document.querySelector("#player-1")
var player2Name = document.querySelector("#player-2")
var warning = document.querySelector(".warning")


// playGameBtn.addEventListener("click", showInstructions);

function showInstructions(){
  document.querySelector(".player-form").classList.add("hidden")
  document.querySelector(".game-instructions").classList.remove("hidden")
  playerGreeting.innerText= `WELCOME ${player1Name.value}!`.toUpperCase()
}

function enableGameBtn() {
  // event.preventDefault();
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


// class Deck {
//   constructor(cards) {
//     this.cards = cards
//   }
// }

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
}
// function addCards() {
//   for(var i=0; i < 10; i++) {
//     var memoryCard = document.querySelector("#" + deck.cards[i].id)
//     console.log(memoryCard);
//     memoryCard.innerHTML=`<img class="back-face" src="assets/card-front.png" alt="B"/>
//     <img class="front-face" src="${deck.cards[i].frontFaceSrc}" alt ="${deck.cards[i].alt}"/>`
//   }
// }

playGameBtn.addEventListener("click", enableGameBtn)

const cards = document.querySelectorAll('.memory-card');

function flipCard(event){
  let closestElement = Element.closest(selector); 
  if (event.target.classList === "memory-card"){
    event.target.parentElement.classList.toggle('flip');
  }
  // event.target.parentElement.classList.toggle('flip');
}
cards.forEach(card => addEventListener('click', flipCard))
