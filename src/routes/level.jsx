import React from 'react';
import Card from "./card"

const Level = (props) => {
  let cards = props.cards

  let cardlist = []
  for (let card of cards) {
    cardlist.push(<Card card={card} player={props.game.getCurrentPlayer()}/>)
  }

  return (
    <div class="cardlist">{cardlist}</div>
  )
}

export default Level;
