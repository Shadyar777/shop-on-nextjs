import { AsyncThunk, configureStore, Reducer, Store } from '@reduxjs/toolkit'
import { Context, createWrapper, HYDRATE } from 'next-redux-wrapper'

import { rootReducer } from '@/src/store/rootReducer'

type TRootState = ReturnType<typeof rootReducer>

const reducer: Reducer<TRootState> = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  } else {
    return rootReducer(state, action)
  }
}

const isDevelopment = process.env.NODE_ENV === 'development'

export const store = configureStore({
  reducer,
  devTools: isDevelopment,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

const makeStore = (_context: Context) => store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type ThunkApiConfig = {
  state: RootState
  dispatch: AppDispatch
  rejectValue: any
  serializedErrorType: any
  pendingMeta: any
  fulfilledMeta: any
  rejectedMeta: any
}

export type AppThunk<Returned = void, ThunkArg = void> = AsyncThunk<
  Returned,
  ThunkArg,
  ThunkApiConfig
>

export const wrapper = createWrapper<Store<RootState>>(makeStore)
