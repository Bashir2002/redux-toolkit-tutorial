import React from 'react'
import CartItem from './cartItem.js'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, toggleModal } from '../features/cart/cartSlice'

const CartContainer = () => {
  const dispatch = useDispatch()

  const { cartItems, total, amount } = useSelector((state) => state.cart)

  if (amount < 1) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed()}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => {
            dispatch(toggleModal())
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
