import { useDispatch, useSelector } from 'react-redux'

import Login from '../components/login/login'
import { RootState } from '../store/store'

function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return <Login />
}

export default Home
