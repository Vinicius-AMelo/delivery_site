import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getEmail,
  getPassword,
} from '../../../features/loginForm/loginFormSlice'
import styles from '../../../scss/login.module.scss'
import { RootState } from '../../../store/store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LoginForm({ handleSubmit }: any) {
  const formValues = useSelector((state: RootState) => state.form)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Olá!</h1>
      <p>Faça login para começar</p>
      <form className={styles.form_content} onSubmit={(e) => handleSubmit(e)}>
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

        {formValues.logged === 'incorrect' && (
          <p className={styles.error}>Email e/ou senha não encontrados.</p>
        )}

        <button type="submit">Logar</button>
      </form>
    </div>
  )
}

export default LoginForm
