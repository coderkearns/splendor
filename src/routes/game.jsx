import React from "react"
import { Link, useParams } from "react-router-dom"
import Game from "../logic/game"
import Level from "./level"
import ChipPool from "./chip-pool"

import "./game-styles.css"

const GameComponent = props => {
  let { players } = useParams()
  players = parseInt(players)

  let playerNames = []
  for (let i of [...Array(players).keys()]) {
    playerNames.push("Player " + (i + 1))
  }
  let game = new Game(playerNames)
  game.init()

  let mode = 1
  let pools = []
  for (let pool of ["diamond", "sapphire", "emerald", "ruby", "opal"]) {
    pools.push(<ChipPool mode={mode} gem={pool} game={game} />)
  }

  return (
    <div>
      <h1>Game with {players} players</h1>

      <Level cards={game.table.cards[3]} game={game} />
      <br />
      <Level cards={game.table.cards[2]} game={game} />
      <br />
      <Level cards={game.table.cards[3]} game={game} />
      <br />

      <div className="chippool-list">
        {pools}
      </div>
    </div>
  )
}

export default GameComponent
