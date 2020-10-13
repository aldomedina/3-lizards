import React, { useEffect, useState } from "react"

const list = ["exercise 1", "exercise 2", "exercise 3"]
const Timer = ({ intervals, intervalDuration, rest, series }) => {
  const [isOn, setIsOn] = useState(false)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [exercises, setExercises] = useState(0)
  const [laps, setLaps] = useState(0)
  const [finish, setFinish] = useState(false)
  const [isRestOn, setIsRestOn] = useState(false)
  const [activeExercise, setActiveExercise] = useState(0)

  useEffect(() => {
    setExercises(intervals)
    setLaps(series)
  }, [])

  useEffect(() => {
    finish && setIsOn(false)
  }, [finish])

  useEffect(() => {
    const interval = setInterval(() => {
      isOn && manageTime(seconds, exercises, isRestOn, laps)
    }, 1000)
    return () => clearInterval(interval)
  }, [isOn, seconds, exercises, laps, isRestOn])

  const manageTime = (sec, remainingexercises, isRestOn, remaininglaps) => {
    let timePerLap = isRestOn ? rest : intervalDuration

    if (sec < timePerLap) {
      setSeconds(seconds => seconds + 1)
    } else if (isRestOn) {
      setSeconds(1)
      setIsRestOn(isRestOn => !isRestOn)
      if (remainingexercises - 1 > 0) {
        setExercises(exercises => exercises - 1)
        setActiveExercise(activeExercise => activeExercise + 1)
      } else {
        setActiveExercise(0)
        setExercises(intervals)
        setLaps(laps => laps - 1)
      }
    } else {
      if (remainingexercises - 1 === 0 && remaininglaps - 1 === 0) {
        setFinish(true)
      } else {
        setSeconds(1)
        setIsRestOn(isRestOn => !isRestOn)
      }
    }
  }

  return (
    <div
      className="timer"
      style={{
        backgroundColor: finish
          ? "lightgreen"
          : isRestOn
          ? "lightblue"
          : "white",
      }}
    >
      {finish ? (
        <h1>FINISH</h1>
      ) : (
        <div className="clock">
          <h1>
            {minutes}:{seconds > 9 ? seconds : `0${seconds}`}
          </h1>
          <h3>remainings intervals: {exercises}</h3>
          <h3>remainings series: {laps}</h3>
          <div className="timer-controls">
            <button onClick={() => setIsOn(true)}> start </button>
            <button onClick={() => setIsOn(false)}> stop </button>
            <button> reset </button>
          </div>
          <h3>{isRestOn ? "Rest" : list[activeExercise]}</h3>
        </div>
      )}
    </div>
  )
}

export default Timer
