import * as actions from './actionTypes'

export function signupSuccess() {
  return { type: actions.USER_SIGNUP_SUCCESS }
}

export function signinSuccess(userData) {
  return { type: actions.USER_SIGNIN_SUCCESS, userData }
}

export function signoutSuccess() {
  return { type: actions.USER_SIGNOUT_SUCCESS }
}

export function signinRequest(userData) {
  return async (dispatch) => {
    dispatch(signinSuccess(userData))
  }
}

export function signoutRequest() {
  return async (dispatch) => {
    dispatch(signoutSuccess())
  }
}
