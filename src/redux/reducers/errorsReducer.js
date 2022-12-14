import { ERRORS } from "../types";

const initialState = {}

export const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERRORS:

      return action.payload

    default:
      return state
  }
}