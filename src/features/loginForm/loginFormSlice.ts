import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IFormState {
  name: string
  email: string
  password: string
  role: string
  logged: string
  fields: string
}

const initialState: IFormState = {
  name: '',
  email: '',
  password: '',
  role: 'default',
  logged: 'idle',
  fields: '',
}

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    getName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    getEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    getPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    getRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload
    },
    login: (state, action: PayloadAction<string>) => {
      state.logged = action.payload
    },
    handleFields: (state, action: PayloadAction<string>) => {
      state.fields = action.payload
    },
  },
})

export const { getName, getEmail, getPassword, getRole, login, handleFields } =
  loginFormSlice.actions

export default loginFormSlice.reducer
