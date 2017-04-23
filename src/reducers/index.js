import { combineReducers } from 'redux'
import main from './main'
import register from './register'
import setting from './setting'

export default combineReducers({ main, register, setting })
