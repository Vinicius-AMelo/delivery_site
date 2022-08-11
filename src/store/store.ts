import { configureStore } from '@reduxjs/toolkit'

import loginFormReducer from '../features/loginForm/loginFormSlice'

export const store = configureStore({
  reducer: {
    form: loginFormReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
