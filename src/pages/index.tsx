import { useDispatch, useSelector } from 'react-redux'

import LoginForm from '../components/loginForm'
import { RootState } from '../store/store'

function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return <LoginForm />
}

export default Home
