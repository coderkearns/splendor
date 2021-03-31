import ChipPool from "./chip-pool.js"
import data from "./data.js"

const randArr = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

class Table {
  constructor(players) {
    this.pool = new ChipPool(players)
    this.decks = { 1: [], 2: [], 3: [] }
    this.cards = { 1: [], 2: [], 3: [] }
  }

  init() {
    this.initDecks()
    this.initCards()
    return this
  }
  initDecks() {
    for (let lvl of [1, 2, 3]) {
      this.decks[lvl] = data.cards.byLevel(lvl)
    }
  }
  initCards() {
    for (let lvl of [1, 2, 3]) {
      for (let c of Array(4)) {
        this.flipcard(lvl)
      }
    }
  }

  flipcard(level) {
    let card = randArr(this.decks[level])
    this.decks[level] = this.decks[level].filter(c => c != card)
    this.cards[level].push(card)
    return card
  }

  buycard(level, card) {
    let i = this.cards[level].indexOf(card)
    this.cards[level].pop(i)
    this.flipcard(level)
    return card
  }
}

export default Table
