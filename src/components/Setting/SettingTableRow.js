import React, { Component } from 'react'
import { Input, Label, Table } from 'semantic-ui-react'
import isNumberLike from 'is-number-like'

class SettingsTableRow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const { tdData, type, onSettingChange } = this.props
    const input = event.target.value
    let error

    switch (type) {
      case 'number':
        // このあたりの数値かどうかの検証は糞なので、時間のあるときに修正する
        if (!isNumberLike(input) || input.indexOf('.') > 0) {
          error = '数値を入力してください'
        }
        break

      default:
        error = ''
        break
    }

    this.setState({ error })

    if (!error && parseInt(input, 10) !== tdData) {
      console.log(onSettingChange)
      onSettingChange(true)
    }
  }

  render () {
    const { thData, tdData } = this.props

    return (
      <Table.Row>
        <Table.Cell width={4}>{thData}</Table.Cell>
        <Table.Cell width={4}>{tdData}</Table.Cell>
        <Table.Cell width={8}>
          <Input
            fluid
            size='small'
            defaultValue={tdData}
            error={!!this.state.error}
            onChange={this.handleChange}
          />
          {this.state.error && <Label basic color='red' pointing>{this.state.error}</Label>}
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default SettingsTableRow
