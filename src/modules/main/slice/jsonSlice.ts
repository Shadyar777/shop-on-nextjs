import { JsonTypes } from '@/src/modules/main/slice/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { AppThunk, ThunkApiConfig } from '@/src/store'

type InitTypes<T> = {
  users: T
  loading: boolean
  error: any
}

const initialState: InitTypes<JsonTypes[]> = {
  users: [],
  loading: false,
  error: null,
}
export const fetchUsers: AppThunk<JsonTypes[]> = createAsyncThunk(
  'users/fetch',
  async (_, { getState }) => {
    const someThing = (getState() as ThunkApiConfig['state']).jsonSlice.users

    // eslint-disable-next-line no-console
    console.log(someThing)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return (await response.json()) as JsonTypes[]
  },
)

const jsonSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.loading = false
        state.error = null
        state.users = payload
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      }),
})

export default jsonSlice.reducer
