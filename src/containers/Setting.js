import React from 'react'
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import map from 'lodash.map'

import SettingTable from '../components/Setting/SettingTable'
import { setCurrentSettings } from '../actions/setting'

const Setting = ({ settings, currentSettings, setCurrentSettings }) => {
  const items = [
    {
      'name': '過去データ',
      'text': '過去のレースデータにかける補正値です。この補正はそのレースのポイント計算の最後に加算されます。',
      'type': 'number'
    },
    {
      'name': '馬場',
      'text': '馬場状態による補正タイム(ミリ秒)です。この補正はレースタイムの値に加算されます。',
      'type': 'number'
    },
    {
      'name': '競馬場',
      'text': '競馬場による補正タイム(ミリ秒)です。この補正はレースタイムの値に加算されます。',
      'type': 'number'
    },
    {
      'name': '基本タイム',
      'text': '距離別のベースとなるタイム(ミリ秒)です。',
      'type': 'number'
    }
  ]

  setCurrentSettings(settings)

  return (
    <Grid>
      {map(items, (item) => {
        return (
          <SettingTable
            key={item.name}
            item={item}
            setting={settings[item.name]}
            currentSettings={currentSettings}
            onSettingChange={(path, val) => setCurrentSettings(path, val)}
          />
        )
      })}

      <Grid.Row>
        <Grid.Column>
          <Button primary onClick={(e) => {
            e.preventDefault()
          }}>Submit</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    currentSettings: state.setting.currentSettings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentSettings: (currentSettings) => {
      dispatch(setCurrentSettings(currentSettings))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting)
