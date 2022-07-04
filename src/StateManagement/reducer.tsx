export const initialState = {
  message: "Default",
  code: 404
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "Morning":
      return {
        ...state,
        message: "Good Morning",
        code: 200
      }
    case "Afternoon":
      return {
        ...state,
        message: "Good Afternoon"
      }
    case "Night":
      return {
        ...state,
        message: "Good Night"
      }
    default:
      return state
  }
}

export default reducer;