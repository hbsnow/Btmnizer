// @flow
import React from 'react'

// import Setting from '../Setting/Setting'

type Props = {
  page: string
}

const MainContent = (props: Props) => {
  const { page } = props

  switch (page) {
    // case 'setting':
      // return <Setting />
    default:
      return <p>{page}はまだできてないよ！</p>
  }
}

export default MainContent
