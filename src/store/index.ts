import { Action, configureStore, Reducer, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { rootReducer, RootState } from '@/src/store/rootReducer'

const reducer: Reducer<RootState> = (state, action) => {
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

const makeStore = () => {
  const store = configureStore({
    reducer,
    devTools: isDevelopment,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })
  if (isDevelopment && (module as any).hot) {
    ;(module as any).hot.accept('./rootReducer', () => {
      const newRootReducer = require('./rootReducer').default
      store.replaceReducer(newRootReducer)
    })
  }

  return store
}

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore)
