import { SET_PAGE, SET_SETTINGS } from '../actions/main.js'

const initialState = {
  page: 'regist',
  settings: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page
      }
    case SET_SETTINGS:
      return {
        ...state,
        settings: action.settings
      }
    default:
      return state
  }
}
