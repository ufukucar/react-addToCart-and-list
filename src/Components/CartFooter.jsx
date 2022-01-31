import React from 'react'
import { Link } from 'react-router-dom'

const CartFooter = ({ emptyCart, totalCount }) => {
  return (
    <>
      <div className="order_total">
        <div className="order_total_content text-md-right">
          <div className="order_total_title">Sipariş Toplamı:</div>
          <div className="order_total_amount">{totalCount} $</div>
        </div>
      </div>
      <div className="cart_buttons">
        {' '}
        <Link to="/#" type="button" className="button cart_button_checkout">
          Alışverişe Devam Et
        </Link>{' '}
        <button
          type="button"
          onClick={(e) => {
            emptyCart()
          }}
          className="button cart_button_clear "
        >
          Sepeti Boşalt
        </button>{' '}
      </div>
    </>
  )
}

export default CartFooter
