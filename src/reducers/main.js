import { SET_PAGE } from '../actions/main.js'

const initialState = {
  userSettings: {},
  page: 'regist'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page
      }
    default:
      return state
  }
}
