/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'

import styles from '../../../scss/home.module.scss'

function Navbar() {
  return (
    <div className={styles.main_nav}>
      <div className={styles.nav}>
        <h1>DELIVERY</h1>
        <ul>
          <li>
            <Link href="/home">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <a>PESQUISAR</a>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <a>FAVORITOS</a>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <a>CONTATO</a>
            </Link>
          </li>
        </ul>
        <h3>Vinícius Melo</h3>
      </div>
    </div>
  )
}

export default Navbar
