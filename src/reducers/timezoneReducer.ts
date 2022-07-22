export type Action =
  | { type: "ADD"; timezone: string }
  | { type: "REMOVE"; id: string }

const initialState: string[] = [
  "Europe/London",
  "Asia/Tokyo",
  "Asia/Hong_Kong",
  "America/Puerto_Rico",
  "America/New_York",
  "EST",
  "CST6CDT",
]

const reducer = (state: string[], action: Action): string[] => {
  switch (action.type) {
    case "ADD":
      if (state.includes(action.timezone)) {
        return state
      }
      return [...state, action.timezone]
    case "REMOVE":
      return state.filter((zone) => zone !== action.id)
    default:
      console.log("default reducer")
      return state
  }
}

export { reducer as timezonesReducer, initialState as timezonesInitialState }
