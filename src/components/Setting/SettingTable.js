import React from 'react'
import { Grid, Input, Header, Table } from 'semantic-ui-react'
import isPlainObject from 'lodash.isplainobject'
import map from 'lodash.map'

const SettingsTable = ({ item, setting }) => {
  console.log(item, setting)
  const renderTable = (data) => {
    return (
      <Table>
        <Table.Body>
          {map(data, (val, key) => {
            return (
              <Table.Row key={key}>
                <Table.Cell width={4}>{key}</Table.Cell>
                <Table.Cell width={4}>{val}</Table.Cell>
                <Table.Cell width={8}><Input fluid size='small' defaultValue={val} /></Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    )
  }

  const renderData = () => {
    const hasChildData = isPlainObject(setting[Object.keys(setting)[0]])

    if (!hasChildData) {
      return (
        <Grid.Row>
          <Grid.Column>
            {renderTable(setting)}
          </Grid.Column>
        </Grid.Row>
      )
    }

    return map(setting, (collection, key) => {
      return (
        <Grid.Row key={key}>
          <Grid.Column>
            <Header size='small'>{key}</Header>
            {renderTable(collection)}
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

        <Grid>
          {renderData()}
        </Grid>
      </Grid.Column>
    </Grid.Row>
  )
}

export default SettingsTable
