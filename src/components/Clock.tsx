import React from "react"
import { DateTime } from "luxon"

import { Action as TimezonesAction } from "../reducers/timezoneReducer"

type Props = {
  name: string
  datetime: DateTime
  timezonesDispatch: React.Dispatch<TimezonesAction>
}

function padNum(n: number): string {
  if (n < 10) {
    return `0${n}`
  }
  return String(n)
}

const Clock: React.FC<Props> = (props) => {
  const now = props.datetime

  const isLocalTime =
    props.name.toLocaleLowerCase().replaceAll(" ", "") === "localtime"

  const handleClose: React.MouseEventHandler<HTMLDivElement> = () => {
    props.timezonesDispatch({ type: "REMOVE", id: props.name })
  }

  return (
    <div className="clock">
      <div className="clock__name">{props.name.replace("_", " ")}</div>
      <div className="clock__time">
        <div className="time time__hour">{padNum(now.hour)}</div>:
        <div className="time time__minute">{padNum(now.minute)}</div>:
        <div className="time time__second">{padNum(now.second)}</div>
      </div>
      {!isLocalTime && (
        <div className="clock__close" onClick={handleClose}>
          X
        </div>
      )}
    </div>
  )
}

export default Clock
