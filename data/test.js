let { Card, Hand, Player } = require("./index.js")
let data = require("./data.js")

let cards = data.cards.all()

function getCards(number=1, level=false) {
  let chosenCards = []
  if (!level) {
    for (i of Array(number)) {
      chosenCards.push( cards[Math.floor(Math.random() * cards.length)] )
    }
  } else {
    let thesecards = data.cards.byLevel(level)
    for (i of Array(number)) {
      chosenCards.push( thesecards[Math.floor(Math.random() * thesecards.length)] )
    }
  }
  return chosenCards
}

const player = new Player("TestPlayer")

cards = getCards(5)

for (card of cards) { player.hand.add_card(new Card(card)) }

module.exports = player
