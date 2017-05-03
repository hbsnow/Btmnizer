import React from 'react'
import { Menu } from 'semantic-ui-react'

const MainMenu = (props) => {
  const { menuItems, page, onMenuClick } = props

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
