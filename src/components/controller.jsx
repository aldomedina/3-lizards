import React from "react"

const Controller = ({ handleChange, value, text, modifier = 1 }) => {
  return (
    <div className="d-flex mr-20">
      <p className="mr-5">
        {" "}
        {text} {value}
      </p>
      <button onClick={() => handleChange(value + modifier)}>+</button>
      <button
        onClick={() =>
          value > 0 ? handleChange(value - modifier) : handleChange(value)
        }
      >
        -
      </button>
    </div>
  )
}

export default Controller
