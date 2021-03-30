class Card {
  constructor(card) {
    this.level = card.level
    this.gem = card.gem
    this.points = card.points
    this.cost = this.compute_cost(card.cost)
  }

  compute_cost(cost) {
    if (!cost) return { diamond: 0, sapphire: 0, emerald: 0, ruby: 0, opal: 0 }
    let newcost = {}
    newcost.diamond = cost.diamond ? cost.diamond : 0
    newcost.sapphire = cost.sapphire ? cost.sapphire : 0
    newcost.emerald = cost.emerald ? cost.emerald : 0
    newcost.ruby = cost.ruby ? cost.ruby : 0
    newcost.opal = cost.opal ? cost.opal : 0
    return newcost
  }

  with_discount(discount) {
    let newcost = { ...this.cost }
    for (let gem in discount) {
      newcost[gem] = this.cost[gem] - discount[gem]
      if (newcost[gem] < 0) newcost[gem] = 0
    }
    return newcost
  }
}

export default Card
export function map (card) {
  return new Card(card)
}
