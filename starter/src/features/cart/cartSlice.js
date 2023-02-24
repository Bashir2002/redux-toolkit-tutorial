import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
  isModal: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      console.log(action)
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increase: (state, { payload }) => {
      console.log(payload)
      const cartItem = state.cartItems.find((item) => item.id === payload.id)
      cartItem.amount = cartItem.amount + 1
    },
    decrease: (state, { payload }) => {
      console.log(payload)
      const cartItem = state.cartItems.find((item) => item.id === payload.id)
      cartItem.amount = cartItem.amount - 1
    },
    toggle: (state, { payload }) => {
      if (payload.inc === 'increase') {
        const cartItem = state.cartItems.find((item) => item.id === payload.id)
        cartItem.amount = cartItem.amount + 1
      }
      if (payload.inc === 'decrease') {
        const cartItem = state.cartItems.find((item) => item.id === payload.id)
        if (cartItem.amount > 1) {
          cartItem.amount = cartItem.amount - 1
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          )
        }
      }
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
    toggleModal: (state) => {
      state.isModal = !state.isModal
    },
  },
})

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  toggle,
  toggleModal,
} = cartSlice.actions

export default cartSlice.reducer
