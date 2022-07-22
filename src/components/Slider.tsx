import React, { useId } from "react"

import ResetIcon from "../images/arrow-clockwise.svg"
import { Action } from "../reducers/timeReducer"

type Props = {
  label: string
  id: string
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  handleReset: React.MouseEventHandler<HTMLImageElement>
  value: number
  min: number
  max: number
  step: number
  dispatch: React.Dispatch<Action>
}

const Slider: React.FC<Props> = (props) => {
  const id = useId()
  return (
    <div className="slider">
      <label htmlFor={props.id} className="slider__label">
        {props.label}
      </label>
      <input
        className="slider__input"
        type="range"
        id={`${props.id}-${id}`}
        name={props.label}
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={props.handleChange}
      />
      <span className="slider__fraction">
        {props.value}/{props.max}
      </span>
      <img
        id={`${props.id}-${id}`}
        className="slider__reset btn"
        src={ResetIcon}
        onClick={props.handleReset}
        alt="reset"
      />
    </div>
  )
}

export default Slider
