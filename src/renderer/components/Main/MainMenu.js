// @flow
import React from 'react'
import { Menu } from 'semantic-ui-react'

const MainMenu = ({ menuItems, page, onMenuClick }) => {
  return (
    <Menu pointing secondary>
      {menuItems.map((menuItem) =>
        <Menu.Item
          key={menuItem.id}
          name={menuItem.id}
          active={page === menuItem.id}
          onClick={(e, { name }) => onMenuClick(name)}
        >
          {menuItem.name}
        </Menu.Item>
      )}
    </Menu>
  )
}

export default MainMenu
