import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '@/src/store/index'

export interface AuthState {
  authState: boolean
}

const initialState: AuthState = {
  authState: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload
    },
  },
})

export const selectAuthState = (state: AppState) => state.authSlice.authState

export const { setAuthState } = authSlice.actions

export default authSlice.reducer
