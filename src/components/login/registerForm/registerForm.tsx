import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getEmail,
  getName,
  getPassword,
  getRole,
} from '../../../features/loginForm/loginFormSlice'
import styles from '../../../scss/login.module.scss'
import { RootState } from '../../../store/store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RegisterForm({ handleSubmit }: any) {
  const formValues = useSelector((state: RootState) => state.form)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Olá!</h1>
      <p>Cadastre-se para começar</p>
      <form className={styles.form_content} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nome Completo"
          onChange={(e) => dispatch(getName(e.target.value))}
          value={formValues.name}
        />

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
        <select name="role" onChange={(e) => dispatch(getRole(e.target.value))}>
          <option value="admin">Administrador</option>
          <option value="client">Cliente</option>
        </select>

        {formValues.logged === 'incorrect' && (
          <p className={styles.error}>Email e/ou senha não encontrados.</p>
        )}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default RegisterForm