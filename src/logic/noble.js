
class Noble {
  constructor(noble) {
    this.cost = noble.cost
  }

}

export default Noble
export function map(noble) {
  return new Noble(noble)
}
