var playGameBtn = document.querySelector("#play-game");

playGameBtn.addEventListener("click",function(){
  document.querySelector(".player-form").classList.add("hidden")
  document.querySelector(".game-instructions").classList.remove("hidden")
})
