// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import { setPage } from '../actions/main'
import MainMenu from '../components/Main/MainMenu'
import MainContent from '../components/Main/MainContent'

import type { MenuItems, SetPage } from '../../common/Types'

class Main extends Component {
  props: {
    menuItems: MenuItems,
    page: string,
    setPage: SetPage
  }

  static defaultProps = {
    menuItems: [
      { id: 'regist', name: '登録' },
      { id: 'setting', name: '設定' }
    ]
  }

  render () {
    const { menuItems, page, setPage } = this.props

    return (
      <Grid stretched>
        <Grid.Row>
          <Grid.Column>
            <MainMenu
              menuItems={menuItems}
              page={page}
              onMenuClick={(val: string): void => setPage(val)}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row stretched>
          <Grid.Column>
            <MainContent page={page} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.main.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page: string): void => {
      dispatch(setPage(page))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
