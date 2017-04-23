import React from 'react'
import { Grid, Header, Table } from 'semantic-ui-react'
import isPlainObject from 'lodash.isplainobject'
import map from 'lodash.map'

import SettingTableRow from './SettingTableRow'

const SettingTable = ({ item, setting, currentSettings, onSettingChange }) => {
  console.log(item, setting)

  const renderTable = (data) => {
    return (
      <Table>
        <Table.Body>
          {map(data, (val, key) => {
            return (
              <SettingTableRow
                key={key}
                thData={key}
                tdData={val}
                type={item.type}
                currentSettings={currentSettings}
                onSettingChange={onSettingChange}
              />
            )
          })}
        </Table.Body>
      </Table>
    )
  }

  const renderWrapper = () => {
    const hasChildCollection = isPlainObject(setting[Object.keys(setting)[0]])

    if (!hasChildCollection) {
      return (
        <Grid.Row>
          <Grid.Column>
            {renderTable(setting)}
          </Grid.Column>
        </Grid.Row>
      )
    }

    return map(setting, (val, key) => {
      return (
        <Grid.Row key={key}>
          <Grid.Column>
            <Header size='small'>{key}</Header>
            {renderTable(val)}
          </Grid.Column>
        </Grid.Row>
      )
    })
  }

  return (
    <Grid.Row>
      <Grid.Column>
        <Header>
          {item.name}
          <Header.Subheader>{item.text}</Header.Subheader>
        </Header>

        <Grid>{renderWrapper()}</Grid>
      </Grid.Column>
    </Grid.Row>
  )
}

export default SettingTable
