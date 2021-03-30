import cards from "./cards.json"
import nobles from "./nobles.json"

import Card from "./card.js"
import Noble from "./noble.js"

function getCards() {
  return cards.map(Card.map)
}

function getLevel(level) {
  return cards.filter(card => card.level == level).map(Card.map)
}

function getNobles() {
  return nobles.map(Noble.map)
}

export default {
  cards: { all: getCards, byLevel: getLevel },
  nobles: { all: getNobles },
}
