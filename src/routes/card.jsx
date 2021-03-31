import React from "react"
import rubyImg from "../images/ruby.png"

const gemSRCs = {
  ruby: rubyImg,
}

const Card = props => {
  let card = props.card

  let cost = []
  for (let c in card.cost) {
    cost.push(
      <span className={`card-cost card-cost-${c}`}>{card.cost[c]}</span>
    )
  }

  const buycard = e => {
    e.preventDefault()
    console.log("Bought: " + card)
  }
  let isDisabled = props.player.canBuy(card)

  return (
    <div className={`card gem-${card.gem} level${card.level}`}>
      <span className="card-points">{card.points}</span>
      <img src={gemSRCs[card.gem]} className="card-gem"></img>
      <div className="card-cost-div">{cost}</div>
      <button className="card-btn" onClick={buycard} disabled={isDisabled}></button>
    </div>
  )
}

export default Card
