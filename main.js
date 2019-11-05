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
    addCards()
  } else {
    this.haveInstructionsBeenShown= true;
    showInstructions();
  }
}

function addCards() {
  var bCards = [
    {
      id: "card-a",
      src: "assets/bey1.jpg",
      alt: "Bey1"
    },
    {
      id: "card-b",
      src: "assets/bey2.jpg",
      alt: "Bey2"
    },
    {
      id: "card-c",
      src: "assets/bey3.jpg",
      alt: "Bey3"
    },
    {
      id: "card-d",
      src: "assets/bey4.jpg",
      alt: "Bey4"
    },
    {
      id: "card-e",
      src: "assets/bey5.jpg",
      alt: "Bey5"
    },
    {
      id: "card-f",
      src: "assets/bey1.jpg",
      alt: "Bey1"
    },
    {
      id: "card-g",
      src: "assets/bey2.jpg",
      alt: "Bey2"
    },
    {
      id: "card-h",
      src: "assets/bey3.jpg",
      alt: "Bey3"
    },
    {
      id: "card-i",
      src: "assets/bey4.jpg",
      alt: "Bey4"
    },
    {
      id: "card-j",
      src: "assets/bey5.jpg",
      alt: "Bey5"
    },
  ]

  for(var i=0; i < 10; i++) {
    var memoryCard = document.querySelector("#" + bCards[i].id)
    memoryCard.innerHTML=`<img class="back-face" src="assets/card-front.png" alt="B"/>
    <img class="front-face" src="${bCards[i].src}" alt="${bCards[i].alt}"/>`
  }
}

playGameBtn.addEventListener("click", enableGameBtn)

const cards = document.querySelectorAll('.memory-card');

function flipCard(event){
  event.target.parentElement.classList.toggle('flip');
}
cards.forEach(card => addEventListener('click', flipCard))
