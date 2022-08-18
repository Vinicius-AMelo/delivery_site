/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import instance from '../../api/axiosInstance'
import {
  getEmail,
  getName,
  getPassword,
  getRole,
  login,
} from '../../features/loginForm/loginFormSlice'
import styles from '../../scss/login.module.scss'
import { RootState } from '../../store/store'
import LoginForm from './loginForm/loginForm'
import RegisterForm from './registerForm/registerForm'

function Login() {
  const [signInUp, setSignInUp] = useState<string>('SignUp')

  const formValues = useSelector((state: RootState) => state.form)
  const dispatch = useDispatch()

  function clearForm() {
    dispatch(getName(''))
    dispatch(getEmail(''))
    dispatch(getPassword(''))
    dispatch(getRole('default'))
  }

  useEffect(() => {
    clearForm()
  }, [signInUp])

  function register() {
    instance
      .post('/users', {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
        role: formValues.role,
      })
      .then((res) => {
        clearForm()
        console.log(res)
      })
      .catch((e) => console.log(e))
  }

  function loginValidate() {
    dispatch(login('idle'))
    instance
      .post('/users/login', {
        email: formValues.email,
        password: formValues.password,
      })
      .then((res) => {
        console.log(res)
        clearForm()
        dispatch(login('logged'))
      })
      .catch((e) => {
        console.log(e)
        dispatch(login('incorrect'))
      })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (signInUp === 'SignUp') {
      register()
    } else if (signInUp === 'SignIn') {
      loginValidate()
    }
  }

  return (
    <main className={styles.main_content}>
      <div className={styles.logo}>
        <h1>DELIVERY</h1>
        <p>Mais que comida, entregamos amor!</p>
      </div>

      <aside className={styles.form_page}>
        <div className={styles.buttons}>
          <button type="button" id={styles.signUp} onClick={() => setSignInUp('SignUp')}>
            Cadastrar
          </button>
          <button type="button" id={styles.signIn} onClick={() => setSignInUp('SignIn')}>
            Entrar
          </button>
        </div>

        {signInUp === 'SignIn' && <LoginForm handleSubmit={handleSubmit} />}

        {signInUp === 'SignUp' && <RegisterForm handleSubmit={handleSubmit} />}
      </aside>
    </main>
  )
}

export default Login
