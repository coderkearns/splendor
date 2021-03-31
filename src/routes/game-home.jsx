import React, { useState } from "react"
import { Link } from "react-router-dom"

const GameHome = props => {
  let [players, setPlayers] = useState(1)

  let incrementPlayers = (e) => {
    e.preventDefault()
    if (players < 4) setPlayers(players + 1)
  }
  let decrementPlayers = (e) => {
    e.preventDefault()
    if (players > 1) setPlayers(players - 1)
  }

  return (
    <div>
      <h1>Game Home!</h1>
      <button onClick={decrementPlayers}>{"<"}</button>
      <button onClick={incrementPlayers}>{">"}</button>
      <p>Players: {players}</p>
      <Link to={"/game/" + players}>Start Game!</Link>
    </div>
  )
}

export default GameHome
