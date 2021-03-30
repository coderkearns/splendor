const Hand = require("./hand.js")

class Player {
  constructor(name) {
    this.name = name
    this.chips = { diamond: 0, sapphire: 0, emerald: 0, ruby: 0, opal: 0, gold: 0 }
    this.hand = new Hand()
  }

  get points() {
    return this.hand.points + this.nobles.points
  }

  can_buy(card) {
    let newprice = card.with_discount(this.hand.discount)

    for (let gem of ["diamond", "sapphire", "emerald", "ruby", "opal"]) {
      newprice[gem] = newprice[gem] - this.chips[gem]
      if (newprice[gem] < 0) newprice[gem] = 0
    }

    let total_unpaid = 0
    for (let gem in newprice) total_unpaid += newprice[gem]
    total_unpaid -= this.chips.gold

    return total_unpaid <= 0
  }
}

module.exports = Player
