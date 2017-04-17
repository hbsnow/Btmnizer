// @flow
import React from 'react'

// import Setting from '../Setting/Setting'

const MainContent = (props: { page: string }) => {
  const { page } = props

  switch (page) {
    // case 'setting':
      // return <Setting />
    default:
      return <p>{page}はまだできてないよ！</p>
  }
}

export default MainContent
