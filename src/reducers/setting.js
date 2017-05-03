import { SET_CHANGED_SETTINGS } from '../actions/setting.js'

const initialState = {
  changedSettings: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANGED_SETTINGS:
      return {
        ...state,
        changedSettings: action.changedSettings
      }
    default:
      return state
  }
}
