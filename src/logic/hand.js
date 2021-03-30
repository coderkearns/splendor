import Card from "./card.js"

class Hand {
  constructor() {
    this._cards = []
    this.discount = { diamond: 0, sapphire: 0, emerald: 0, ruby: 0, opal: 0 }
  }

  add_card(card) {
    if (card instanceof Card) {
      this._cards.push(card)
      this.discount[card.gem] += 1
    } else {
      this._cards.push(new Card(card))
      this.discount[card.gem] += 1
    }
  }

  get points() {
    return this._cards.reduce((total, current) => {
      return total + current.points
    })
  }

  get_discount(gem) {
    return this.discount[gem]
  }

  check_noble(noble) {
    for (let gem in noble.cost) {
      if (this.discount[gem] < noble.cost[gem]) return false
    }
    return true
  }
}

export default Hand
