const initialState = {
  url: '',
  error: '',
  race: {},
  distances: [],
  horses: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGISTER_FORM_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'SET_REGISTER_RACE':
      return {
        ...state,
        error: initialState.error,
        race: action.race
      }
    case 'SET_REGISTER_DISTANCES':
      return {
        ...state,
        distances: action.distances
      }
    case 'SET_REGISTER_HORSES':
      return {
        ...state,
        horses: action.horses
      }
    default:
      return state
  }
}
