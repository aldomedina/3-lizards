import React, { useEffect, useState } from "react"
import SEO from "../components/seo"
import Select from "react-select"

import "./../style/style.sass"
import Timer from "../components/timer"
import Controller from "../components/controller"

const restOptions = [
  { value: 15, label: "15" },
  { value: 30, label: "30" },
  { value: 45, label: "45" },
]
const list = [
  { label: "exercise 1", value: "exercise 1" },
  { label: "exercise 2", value: "exercise 2" },
  { label: "exercise 3", value: "exercise 3" },
]
const IndexPage = () => {
  const [series, setSeries] = useState(0)
  const [exercises, setExercises] = useState(0)
  const [exerciseDuration, setExerciseDuration] = useState(0)
  const [rest, setRest] = useState(0)
  const [isOn, setIsOn] = useState(false)
  return (
    <div className="main">
      <SEO title="Home" />
      {isOn ? (
        <Timer
          series={series}
          intervals={exercises}
          intervalDuration={exerciseDuration}
          rest={rest}
        />
      ) : (
        <div>
          <div className="d-flex flex-col space-between mb-40">
            <Controller handleChange={setSeries} value={series} text="Series" />
            <Controller
              handleChange={setExercises}
              value={exercises}
              text="Exercises"
            />
            <Controller
              handleChange={setExerciseDuration}
              value={exerciseDuration}
              modifier={5}
              text="Exercise duration"
            />
            <Controller
              handleChange={setRest}
              value={rest}
              modifier={5}
              text="Rest duration"
            />
          </div>
          <div style={{ width: "200px" }}></div>
          <Select options={list} />
          <button onClick={() => setIsOn(true)}>GO!</button>
        </div>
      )}
    </div>
  )
}
export default IndexPage
