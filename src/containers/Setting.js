import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import map from 'lodash.map'

import SettingTable from '../components/Setting/SettingTable'

const Setting = ({ settings }) => {
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

  return (
    <Grid>
      {map(items, (item) => {
        return <SettingTable key={item.name} item={item} setting={settings[item.name]} />
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

export default Setting

/*
import isPlainObject from 'lodash.isplainobject'
  const renderTableRow = (data) => {
    map(data, (val, key) => {
      return (
        <Table.Row key={key}>
          <Table.Cell width={4}>{key}</Table.Cell>
          <Table.Cell width={4}>{val}</Table.Cell>
          <Table.Cell width={8}><Input fluid size='small' defaultValue={val} /></Table.Cell>
        </Table.Row>
      )
    })
  }

  const renderTable = (data) => {
    const hasChildren = isPlainObject(data[Object.keys(data)[0]])

    if (!hasChildren) {
      return (
        <div>
          <Table compact>
            <Table.Body>
              {renderTableRow(data)}
            </Table.Body>
          </Table>
        </div>
      )
    }

    return map(data, (val, key) => {
      return (
        <div key={key}>
          {hasChildren ? `<Header size='small'>${key}</Header>` : null}

          <Table compact>
            <Table.Body>
              {renderTableRow(val)}
            </Table.Body>
          </Table>
        </div>
      )
    })
  }

  const renderData = (key, subtext) => {
    const data = settings[key]

    return (
      <Grid.Row>
        <Grid.Column>
          <Header>
            {key}
            <Header.Subheader>{subtext}</Header.Subheader>
          </Header>

          {renderTable(data)}
        </Grid.Column>
      </Grid.Row>
    )
  }


      <Grid.Row>
        <Grid.Column>
          <Header>
            過去データ
            <Header.Subheader>
              過去のレースデータにかける補正値です。この補正はそのレースのポイント計算の最後に加算されます。
            </Header.Subheader>
          </Header>

          <Table compact>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={4}>{settings.old['0']}</Table.Cell>
                <Table.Cell width={4}>{settings.old['0']}</Table.Cell>
                <Table.Cell width={8}><Input fluid size='small' defaultValue={settings.old['0']} /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1年以上2年未満</Table.Cell>
                <Table.Cell>{settings.old['1']}</Table.Cell>
                <Table.Cell><Input fluid size='small' defaultValue={settings.old['1']} /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2年以上3年未満</Table.Cell>
                <Table.Cell>{settings.old['2']}</Table.Cell>
                <Table.Cell><Input fluid size='small' defaultValue={settings.old['2']} /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3年以上4年未満</Table.Cell>
                <Table.Cell>{settings.old['3']}</Table.Cell>
                <Table.Cell><Input fluid size='small' defaultValue={settings.old['3']} /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4年以上5年未満</Table.Cell>
                <Table.Cell>{settings.old['4']}</Table.Cell>
                <Table.Cell><Input fluid size='small' defaultValue={settings.old['4']} /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5年以上</Table.Cell>
                <Table.Cell>{settings.old['5']}</Table.Cell>
                <Table.Cell><Input fluid size='small' defaultValue={settings.old['5']} /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Header>
            馬場
            <Header.Subheader>
              馬場状態での補正タイムです。この補正はレースタイムの値に加算されます。
            </Header.Subheader>
          </Header>

          <Header size='small'>芝</Header>

          <Table compact>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={4}>良</Table.Cell>
                <Table.Cell width={4}>{settings.cond[0].point[0]}</Table.Cell>
                <Table.Cell width={8}><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>稍重</Table.Cell>
                <Table.Cell>{settings.cond[0].point[1]}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>重</Table.Cell>
                <Table.Cell>{settings.old['2']}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>不良</Table.Cell>
                <Table.Cell>{settings.old['3']}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Header size='small'>ダート</Header>

          <Table compact>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={4}>良</Table.Cell>
                <Table.Cell width={4}>{settings.old['0']}</Table.Cell>
                <Table.Cell width={8}><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>稍重</Table.Cell>
                <Table.Cell>{settings.cond[0].point[0]}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>重</Table.Cell>
                <Table.Cell>{settings.old['2']}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>不良</Table.Cell>
                <Table.Cell>{settings.old['3']}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
*/
