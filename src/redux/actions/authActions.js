import axios from "axios"
import { ERRORS, SET_USER } from "../types"
import jwt_decode from "jwt-decode"
import { setAuth } from '../../util/setAuth';

// register

export const Registration = (form, navigate) => dispatch => {
  axios.post('./api/register', form)
    .then(res => {
      navigate('/login')
      dispatch({
        type: ERRORS,
        payload: {}
      })
    })
    .catch(err => {
      /*on le dit : je veux que me dispatche les err elli jew du backend (required ...) je veux le mettre f state errorsReducer action.payload */
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    })
}


//login

export const LoginAction = (form, navigate) => dispatch => {
  axios.post('./api/login', form)
    .then(res => {
      const { token } = res.data
      /* sauvegarde my token in localstorage*/
      localStorage.setItem('jwt', token)
      const decode = jwt_decode(token)
      dispatch(setUSER(decode))
      setAuth(token)

    })
    .catch(err => {
      /*on le dit : je veux que me dispatche les err elli jew du backend (required ...) je veux le mettre f state errorsReducer action.payload */
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    })
}


// logout

export const Logout = () => dispatch => {
  localStorage.removeItem('jwt')
  dispatch({
    type: SET_USER,
    payload: {}
  })
}


export const setUSER = (decode) => ({
  type: SET_USER,
  payload: decode
})