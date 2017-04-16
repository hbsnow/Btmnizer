// @flow
import jsonfile from 'jsonfile'
import equal from 'deep-equal'

type Window = {
  size: Array<number>,
  position: Array<?number>,
  isMaximized: boolean
}

type SettingsJson = {
  version: number,
  window: {
    main: Window
  }
}

class UserSettings {
  filepath: string
  defaultFilepath: string
  settings: ?SettingsJson

  constructor (filepath: string, defaultFilepath: string) {
    this.filepath = filepath
    this.defaultFilepath = defaultFilepath
    this.settings = null

    this.read()
  }

  /**
   * 現在のユーザ設定ファイルのデータを取得する。
   */
  get (): SettingsJson {
    return this.settings
  }

  /**
   * ユーザ設定を読み込む。設定がなければ作成する。
   */
  read (): SettingsJson {
    let jsonData: SettingsJson
    try {
      jsonData = jsonfile.readFileSync(this.filepath)
    } catch (err) {
      const defaultJsonData = jsonfile.readFileSync(this.defaultFilepath)
      jsonfile.writeFileSync(this.filepath, defaultJsonData)

      this.read(this.filepath, this.defaultFilepath)
    }
    this.settings = jsonData

    return jsonData
  }

  /**
   * 渡したデータがユーザ設定と異なれば上書きする
   */
  writeWindow (data: SettingsJson, name: string = 'main', force: boolean = false): boolean {
    if (!force && equal(data, this.settings.window[name])) {
      return false
    }

    let windowSettings = this.settings
    windowSettings.window[name] = SettingsJson
    jsonfile.writeFileSync(this.filepath, windowSettings)

    return true
  }
}

export default UserSettings
