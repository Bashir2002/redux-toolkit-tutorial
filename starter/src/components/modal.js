import { clearCart, toggleModal } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all items from your shopping cart?</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart())
              dispatch(toggleModal())
            }}
          >
            confirm
          </button>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => {
              dispatch(toggleModal())
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
export default Modal
