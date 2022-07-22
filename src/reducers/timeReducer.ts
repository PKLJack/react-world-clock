import { DateTime, Duration } from "luxon"

type State = {
  now: DateTime
  extra: Duration
}

export type Action =
  | { type: "SET_NOW"; now: DateTime }
  | { type: "INC_NOW" }
  | { type: "SET_EXTRA_HOUR"; hours: number }
  | { type: "SET_EXTRA_MINUTE"; minutes: number }

const initialState: State = {
  now: DateTime.now(),
  extra: Duration.fromObject({}),
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NOW":
      return { ...state, now: action.now }
    case "INC_NOW":
      return { ...state, now: state.now.plus({ second: 1 }) }
    case "SET_EXTRA_HOUR":
      return {
        ...state,
        extra: Duration.fromObject({
          hours: action.hours,
          minutes: state.extra.minutes,
        }),
      }
    case "SET_EXTRA_MINUTE":
      return {
        ...state,
        extra: Duration.fromObject({
          hours: state.extra.hours,
          minutes: action.minutes,
        }),
      }

    default:
      console.log("default reducer")
      return state
  }
}

export { reducer as timeReducer, initialState as timeInitialState }
