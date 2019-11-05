class Deck {
  constructor(cards){
    this.cards= cards;
    this.matchedCards= [];
    this.matches= 0;
    this.selectedCards= [];
  }
  shuffle(){}
  checkSelectedCards(){}
  moveToMatched(){}
}
// if selectedCards match, move (push?) to matchedCards
// matches= counter
// dataset
//
// function createDeck(){
//   var Beys = ['Bey1', 'Bey2', 'Bey3', 'Bey4','Bey5']
//   for (var i= 0; i<10; i++){
//     // memory-card.innerHTML.push.cards
//   var B = new Card(Beys[i])
//     this.cards.push(B)
//     this.cards.push(B)
//   }
// }
//or <5 and concatenate? 5 x 2?

// var frontFace = {
//   Bey1: "assets/bey1.jpg",
//   Bey2: "assets/bey2.jpg",
//   Bey3: "assets/bey3.jpg",
//   Bey4: "assets/bey4.jpg",
//   Bey5: "assets/bey5.jpg"
// }
//
//
// class Card {
//  constructor(backface){
//   this.backFace = src="assets/bey1.jpg"
//   this.frontFace =
//   this.matchInfo = "Bey1"
//   this.matched= false;
//  }
//  match(){
//    if (this.matchInfo===othercard.matchInfo) {
//      then this.matched = true;
//      deck.matches++;
//      remove from selectedCards;
//      push into matched cards;
//      remove card from view;
//    } else if{
//      (this.matchInfo !== othercard.matchInfo){
//        flip card back
//      }
//    }
//  }
// }
// //assign cardLocation when creating cards in JS
// var cardLocation = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
