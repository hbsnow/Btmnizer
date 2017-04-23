import { SET_ACTIVE_BUTTON } from '../actions/setting.js'

const initialState = {
  isActive: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_BUTTON:
      return {
        ...state,
        isActive: action.isActive
      }
    default:
      return state
  }
}
