import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Container } from 'semantic-ui-react'
import { remote } from 'electron'
import path from 'path'
import jsonfile from 'jsonfile'

import { setPage, setSettings } from '../actions/main'
import MainMenu from '../components/Main/MainMenu'
import MainContent from '../components/Main/MainContent'
import defaultSettings from '../common/settings.js'

class Main extends Component {
  static defaultProps = {
    menuItems: [
      { id: 'regist', name: '登録' },
      { id: 'setting', name: '設定' }
    ]
  }

  constructor (props) {
    super(props)

    this.jsonpath = path.join(remote.app.getPath('userData'), 'settings.json')
  }

  componentDidMount () {
    const settings = this.readSettings()
    this.props.setSettings(settings)
  }

  readSettings () {
    let userSettings
    try {
      userSettings = jsonfile.readFileSync(this.jsonpath)
    } catch (err) {
      userSettings = defaultSettings
      jsonfile.writeFileSync(this.jsonpath, userSettings)
    }

    return userSettings
  }

  render () {
    const { menuItems, page, settings, setPage } = this.props

    return (
      <Grid stretched>
        <Grid.Row>
          <Grid.Column>
            <MainMenu
              page={page}
              menuItems={menuItems}
              onMenuClick={(val) => setPage(val)}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row stretched>
          <Grid.Column>
            <Container>
              <MainContent
                page={page}
                settings={settings}
              />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.main.settings,
    page: state.main.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSettings: (settings) => {
      dispatch(setSettings(settings))
    },
    setPage: (page) => {
      dispatch(setPage(page))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
