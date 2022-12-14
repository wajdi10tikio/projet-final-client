import isEmpty from "../../util/isEmpty";
import { SET_USER } from "../types";

const initialState = {
  isConnected: false, /*ki yconecti utilisateur twali true */
  user: {},
}

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isConnected: !isEmpty(action.payload) /*hedhy l isEmpty eli 3malneha fl backend fl validation . jebneha lel frent fl util w idha ken isConencted true heya false wl 3aks*/,
        user: action.payload
      };
    default:
      return state
  }
}