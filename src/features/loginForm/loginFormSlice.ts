import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface IFormState {
  email: string
  password: string
}

const initialState: IFormState = {
  email: '',
  password: '',
}

export const loginFormSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    getPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    handleForm: (state) => { },
  },
})

export const { getEmail, getPassword, handleForm } = loginFormSlice.actions

export default loginFormSlice.reducer
