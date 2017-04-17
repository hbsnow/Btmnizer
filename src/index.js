// @flow
import { app, BrowserWindow } from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'
import Config from 'electron-config'
import equal from 'deep-equal'

const config = new Config({
  defaults: {
    bounds: {
      width: 1280,
      height: 720
    },
    isMaximized: false
  }
})

let mainWindow = null

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  const {width, height, x, y} = config.get('bounds')
  mainWindow = new BrowserWindow({width, height, x, y})
  if (config.get('isMaximized')) {
    mainWindow.maximize()
  }

  mainWindow.loadURL(`file://${__dirname}/app.html`)

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
    const current = {
      bounds: mainWindow.getBounds(),
      isMaximized: mainWindow.isMaximized()
    }

    if (!equal(current, config.store)) {
      config.set(current)
    }
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
