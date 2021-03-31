import React from "react"

const ChipPool = props => {
  let pool = props.game.table.pool
  console.log(props)

  let onChipClick = e => {
    e.preventDefault()
    pool.takeChip(props.gem)
  }

  let isDisabled = () => {
    // check props.mode...
    // use pool.canTake / pool.canTakeTwo based on mode.
    return false
  }

  return (
    <div className="chippool">
      <button
      className={`chippool-btn ${props.gem}-pool`} onClick={onChipClick}
      disabled={isDisabled()}
      >{pool.getChips(props.gem)}</button>
    </div>
  )
}

export default ChipPool
