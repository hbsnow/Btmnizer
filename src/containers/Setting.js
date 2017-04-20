import React from 'react'
import { Grid, Input, Button, Header, Table } from 'semantic-ui-react'

const Setting = ({ settings }) => {
  console.log(settings)
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header>過去データ</Header>
          <p>過去のレースデータにかける補正値になります。</p>

          <Table compact>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1年未満</Table.Cell>
                <Table.Cell>{settings.old['0']}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1年以上2年未満</Table.Cell>
                <Table.Cell>{settings.old['1']}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2年以上3年未満</Table.Cell>
                <Table.Cell>{settings.old['2']}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3年以上4年未満</Table.Cell>
                <Table.Cell>{settings.old['3']}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4年以上5年未満</Table.Cell>
                <Table.Cell>{settings.old['4']}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5年以上</Table.Cell>
                <Table.Cell>{settings.old['5']}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Header>馬場 (芝)</Header>

          <Table compact>
            <Table.Body>
              <Table.Row>
                <Table.Cell>良</Table.Cell>
                <Table.Cell>{settings.old['0']}</Table.Cell>
                <Table.Cell><Input fluid size='small' /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>稍重</Table.Cell>
                <Table.Cell>{settings.old['1']}</Table.Cell>
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
