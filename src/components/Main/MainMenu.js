// @flow
import React from 'react'
import { Menu } from 'semantic-ui-react'

type Props = {
  menuItems: Array<{ id: string, name: string }>,
  page: string,
  onMenuClick: (page: string) => void
}

const MainMenu = (props: Props) => {
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
