import { DateTime } from "luxon"
import React, { useState, useReducer, useEffect, useId } from "react"
import { ReactSVG } from "react-svg"

import "./App.css"
import Clock from "./components/Clock"
import SearchBox from "./components/SearchBox"
import Slider from "./components/Slider"
import { timeInitialState, timeReducer } from "./reducers/timeReducer"
import {
  timezonesInitialState,
  timezonesReducer,
} from "./reducers/timezoneReducer"
import UpArrow from "./images/chevron-compact-up.svg"
import DownArrow from "./images/chevron-compact-down.svg"

function App() {
  const [time, timeDispatch] = useReducer(timeReducer, timeInitialState)
  const [timezones, timezonesDispatch] = useReducer(
    timezonesReducer,
    timezonesInitialState
  )
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    console.log("effect start")
    const timerId = window.setInterval(() => {
      timeDispatch({ type: "SET_NOW", now: DateTime.now() })
    }, 1000)

    return () => {
      console.log("effect end")
      window.clearInterval(timerId)
    }
  }, [])

  const fakeElems2 = timezones.map((zone, idx) => (
    <Clock
      key={idx}
      name={zone}
      datetime={time.now.setZone(zone).plus(time.extra)}
      timezonesDispatch={timezonesDispatch}
    />
  ))

  const handleSliderChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    console.log("Number(e.target.value)", Number(e.target.value))
    if (e.target.id.startsWith("hours")) {
      timeDispatch({ type: "SET_EXTRA_HOUR", hours: Number(e.target.value) })
      return
    } else if (e.target.id.startsWith("minutes")) {
      timeDispatch({
        type: "SET_EXTRA_MINUTE",
        minutes: Number(e.target.value),
      })
      return
    } else {
      throw new Error(`Unknown e.target.id ${e.target.id}`)
    }
  }

  const handleSliderReset: React.MouseEventHandler<HTMLImageElement> = (
    e
  ): void => {
    const target = e.target as HTMLBaseElement

    if (target.id.startsWith("hours")) {
      timeDispatch({ type: "SET_EXTRA_HOUR", hours: 0 })
      return
    } else if (target.id.startsWith("minutes")) {
      timeDispatch({ type: "SET_EXTRA_MINUTE", minutes: 0 })
      return
    } else {
      throw new Error(`Unknown target.id ${target.id}`)
    }
  }

  return (
    <div className="App">
      <h1 className="App__title">World Clock</h1>
      <Clock
        name={`Local Time`}
        datetime={time.now.plus(time.extra)}
        timezonesDispatch={timezonesDispatch}
      />
      <ReactSVG
        src={showSearch ? UpArrow : DownArrow}
        className="search__toggle"
        onClick={() => setShowSearch((prev) => !prev)}
      />
      {showSearch && <SearchBox timezonesDispatch={timezonesDispatch} />}
      <div className="clocks">{fakeElems2}</div>
      <div className="sliders">
        <Slider
          id="hours"
          label="H"
          max={12}
          min={-12}
          step={1}
          value={time.extra.hours}
          handleChange={handleSliderChange}
          handleReset={handleSliderReset}
          dispatch={timeDispatch}
        />
        <Slider
          id="minutes"
          label="M"
          max={30}
          min={-30}
          step={1}
          value={time.extra.minutes}
          handleChange={handleSliderChange}
          handleReset={handleSliderReset}
          dispatch={timeDispatch}
        />
      </div>
      <div style={{ height: "10rem" }}></div>
    </div>
  )
}

export default App
