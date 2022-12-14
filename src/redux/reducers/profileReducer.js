import { DELETE_PROFILE, SET_PROFILE, SET_PROFILES } from "../types";

const initialState = {
  profiles: [],
  profile: {}
}
export const profilesAffichage = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:

      return {
        ...state,
        profile: action.payload,
      };

    case SET_PROFILES:

      return {
        ...state,
        profiles: action.payload
      }

    case DELETE_PROFILE:

      return {
        ...state,
        profiles: state.profiles.filter(p => p._id !== action.payload)
        // on cas supprimina w mchet b s77i.bch ydespatch delite donc bch ylawej 3al les profiles el kol elli l id mte3hom different 3ali fasa5neh w yfaichihom
      }

    default:
      return state;
  }
}