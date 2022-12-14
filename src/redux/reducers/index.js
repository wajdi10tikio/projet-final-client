import { combineReducers } from "redux";
import { authReducers } from "./authReducer";
import { errorsReducer } from "./errorsReducer";
import { profilesAffichage } from "./profileReducer"


export default combineReducers({
  auth: authReducers,
  errors: errorsReducer,
  profiles: profilesAffichage
})