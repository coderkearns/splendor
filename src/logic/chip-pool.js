const startingChips = {
  2: { diamond: 4, sapphire: 4, emerald: 4, ruby: 4, opal: 4, gold: 5 },
  3: { diamond: 5, sapphire: 5, emerald: 5, ruby: 5, opal: 5, gold: 5 },
  4: { diamond: 7, sapphire: 7, emerald: 7, ruby: 7, opal: 7, gold: 5 },
  default: { diamond: 1, sapphire: 1, emerald: 1, ruby: 1, opal: 1, gold: 1 }
}

class ChipPool {
  constructor(playercount) {
    this.chips = startingChips[playercount] || startingChips.default
  }

  getChips(gem) {
    return this.chips[gem]
  }

  canTakeChip(gem) {
    return this.chips[gem] > 0
  }
  canTakeTwoChips(gem) {
    return this.chips[gem] >= 4
  }
  takeChip(gem) {
    this.chips[gem] -= 1
    return this.chips[gem]
  }

  returnChip(gem) {
    this.chips[gem] += 1
    return this.chips[gem]
  }
}

export default ChipPool
