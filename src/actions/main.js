export const SET_PAGE = 'SET_PAGE'
export const SET_SETTINGS = 'SET_SETTINGS'

export const setPage = (page) => ({
  type: SET_PAGE,
  page
})

export const setSettings = (settings) => ({
  type: SET_SETTINGS,
  settings
})
