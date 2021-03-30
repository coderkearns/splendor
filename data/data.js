let cards = require("./cards.json")
let nobles = require("./nobles.json")

const Card = require("./card.js")
const Noble = require("./noble.js")

function getCards() {
  return cards.map(Card.map)
}

function getLevel(level) {
  return cards.filter(card => card.level == level).map(Card.map)
}

function getNobles() {
  return nobles.map(Noble.map)
}

module.exports = {
  cards: { all: getCards, byLevel: getLevel },
  nobles: { all: getNobles }
}
