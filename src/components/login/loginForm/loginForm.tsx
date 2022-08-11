import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getEmail,
  getPassword,
  handleForm,
} from '../../../features/loginForm/loginFormSlice'
import styles from '../../../scss/login.module.scss'
import { RootState } from '../../../store/store'

function LoginForm() {
  const formValues = useSelector((state: RootState) => state.form)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Olá!</h1>
      <p>Cadastre-se para começar</p>
      <form className={styles.form_content}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => dispatch(getEmail(e.target.value))}
          value={formValues.email}
        />

        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => dispatch(getPassword(e.target.value))}
          value={formValues.password}
        />

        <button type="button" onClick={() => dispatch(handleForm())}>
          Logar
        </button>
      </form>
    </div>
  )
}

export default LoginForm
