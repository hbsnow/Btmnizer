// @flow
import React from 'react'
import { Menu } from 'semantic-ui-react'
import type { MenuItems, SetPage } from '../../../common/types'

const MainMenu = (props: { menuItems: MenuItems, page: string, onMenuClick: SetPage }) => {
  return (
    <Menu pointing secondary>
      {props.menuItems.map((menuItem) =>
        <Menu.Item
          key={props.menuItem.id}
          name={props.menuItem.id}
          active={props.page === menuItem.id}
          onClick={(e, { name }) => props.onMenuClick(name)}
        >
          {props.menuItem.name}
        </Menu.Item>
      )}
    </Menu>
  )
}

export default MainMenu
