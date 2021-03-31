import data from "./data.js"
import Player from "./player.js"
import Table from "./table.js"
import Card from "./card.js"


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

class Game {

  constructor(playerNames) {
    this.players = []
    for (let p of playerNames) {
      this.players.push(new Player(p))
    }
    shuffleArray(this.players)
    this.table = new Table(this.players.length)
  }
  init() {
    this.table.init()
    this.currentPlayer = 0
    return this
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayer]
  }
  nextTurn() {
    this.currentPlayer += 1
    if (this.currentPlayer > this.players.length) {
      this.currentPlayer = 0
    }
  }
}

Game.Card = Card
export default Game
