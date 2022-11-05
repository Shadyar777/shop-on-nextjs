import { combineReducers } from 'redux'
import authSlice from './authState'

export const rootReducer = combineReducers({
  authSlice,
})

export type RootState = ReturnType<typeof rootReducer>
