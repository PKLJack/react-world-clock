import React, { useState } from "react"

import { Action as TimezonesAction } from "../reducers/timezoneReducer"
import { ALL_TIMEZONES } from "../data"

type Props = {
  timezonesDispatch: React.Dispatch<TimezonesAction>
}

const SearchBox: React.FC<Props> = (props) => {
  const [pattern, setPattern] = useState("")

  const handleClick = (e: any, timezone: string) => {
    console.log(timezone)
    props.timezonesDispatch({ type: "ADD", timezone: timezone })
  }

  const elems = ALL_TIMEZONES.filter((timezone) =>
    timezone
      .replaceAll("_", " ")
      .toLocaleLowerCase()
      .includes(pattern.toLocaleLowerCase())
  ).map((timezone, idx) => (
    <div
      key={idx}
      className="results__row"
      onClick={(e) => handleClick(e, timezone)}
    >
      {timezone.replaceAll("_", " ")}
    </div>
  ))

  return (
    <div className="search">
      <input
        type="text"
        className="search__bar"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
      />
      <div className="results__box">
        <div className="results__inner">{elems}</div>
      </div>
    </div>
  )
}

export default SearchBox
