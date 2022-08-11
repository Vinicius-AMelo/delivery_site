import styles from '../../scss/login.module.scss'
import LoginForm from './loginForm/loginForm'

function Login() {
  return (
    <main className={styles.main_content}>
      <div className={styles.logo}>
        <h1>DELIVERY</h1>
        <p>Mais que comida, entregamos amor!</p>
      </div>
      <aside className={styles.form_page}>
        <LoginForm />
      </aside>
    </main>
  )
}

export default Login