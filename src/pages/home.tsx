import Content from '../components/home/content/content'
import Navbar from '../components/home/navbar/navbar'
import styles from '../scss/home.module.scss'

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Content />
    </div>
  )
}

export default Home
