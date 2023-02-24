import Navbar from './components/Navbar'
import { useEffect } from 'react'

import CartContainer from './components/cartContainer'
import { calculateTotals } from './features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import Modal from './components/modal'

function App() {
  const { cartItems, isModal } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <>
      {isModal && <Modal />}

      <Navbar />
      <CartContainer />
    </>
  )
}
export default App
