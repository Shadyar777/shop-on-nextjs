import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/src/store/index'

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
    setAuthState(state, action: PayloadAction<boolean>) {
      state.authState = action.payload
    },
  },
})

export const selectAuthState = (state: RootState) => state.authSlice.authState

export const { setAuthState } = authSlice.actions

export default authSlice.reducer
