
class Noble {
  constructor(noble) {
    this.cost = noble.cost
  }

  map(noble) {
    return new Noble(noble)
  }
}

module.exports = Noble
