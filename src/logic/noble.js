
class Noble {
  constructor(noble) {
    this.cost = noble.cost
  }

}

module.exports = Noble
module.exports.map = (noble) => {
  return new Noble(noble)
}
