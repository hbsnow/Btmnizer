import { app, BrowserWindow } from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'
import path from 'path'

import UserSettings from '../common/utils/UserSettings'

const userDataPath = app.getPath('userData')
const userSettings = new UserSettings(
  path.join(userDataPath, 'Settings'),
  path.join(__dirname, '../common/defaultSettings.json')
)

let mainWindow = null

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  const settings = userSettings.get()

  mainWindow = new BrowserWindow({
    width: settings.window.main.size[0],
    height: settings.window.main.size[1],
    x: settings.window.main.position[0],
    y: settings.window.main.position[1]
  })

  if (settings.window.main.isMaximized) {
    mainWindow.maximize()
  }

  mainWindow.loadURL(path.join(__dirname, '../renderer/index.html'))

  if (process.env.NODE_ENV === 'development') {
    const devtronInstalled = BrowserWindow.getDevToolsExtensions().hasOwnProperty('devtron')
    if (!devtronInstalled) {
      BrowserWindow.addDevToolsExtension(require('devtron').path)
    }

    installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
      .then((name) => console.log(`Added Extension: ${name}`))
      .catch((err) => console.log('An error occurred: ', err))

    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('close', () => {
    const currentSettings = {
      size: mainWindow.getSize(),
      position: mainWindow.getPosition(),
      isMaximized: mainWindow.isMaximized()
    }

    userSettings.write(currentSettings)
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
