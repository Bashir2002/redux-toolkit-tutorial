import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeItem,
  increase,
  decrease,
  toggle,
} from '../features/cart/cartSlice'

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()
  const inc = 'increase'
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id))
          }}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className='amount-btn'
          onClick={() => {
            dispatch(toggle({ id, inc: 'increase' }))
          }}
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button
          className='amount-btn'
          onClick={() => {
            dispatch(toggle({ id, inc: 'decrease' }))
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
