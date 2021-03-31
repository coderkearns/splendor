import cards from "./cards.json"
import nobles from "./nobles.json"

import Card, {map as cardMapper} from "./card.js"
import Noble, {map as nobleMapper} from "./noble.js"

function getCards() {
  return cards.map(cardMapper)
}

function getLevel(level) {
  return cards
    .filter(card => card.level == level)
    .map(cardMapper)
}

function getNobles() {
  return nobles.map(nobleMapper)
}

export default {
  cards: { all: getCards, byLevel: getLevel },
  nobles: { all: getNobles },
}
