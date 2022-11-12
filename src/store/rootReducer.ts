import { combineReducers } from 'redux'
import authSlice from './authState'
import { jsonSlice } from '@/src/modules/main/slice'

export const rootReducer = combineReducers({
  authSlice,
  jsonSlice,
})
