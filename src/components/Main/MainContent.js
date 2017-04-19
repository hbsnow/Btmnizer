import React from 'react'

// import Setting from '../../containers/Setting'

const MainContent = (props) => {
  const { page } = props

  switch (page) {
    // case 'setting':
      // return <Setting />
    default:
      return <p>{page}はまだできてないよ！</p>
  }
}

export default MainContent
