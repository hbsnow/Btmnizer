import React from 'react'

import Setting from '../../containers/Setting'

const MainContent = (props) => {
  const { page, settings } = props

  switch (page) {
    case 'setting':
      return <Setting settings={settings} />
    default:
      return <p>{page}はまだできてないよ！</p>
  }
}

export default MainContent
