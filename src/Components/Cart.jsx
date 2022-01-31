import React from 'react'
import CartItems from './CartItems'
import { Link } from 'react-router-dom'
import CartFooter from './CartFooter'

const Cart = ({ state, emptyCart }) => {
  console.log('cart length: ', state.cart.length)

  return (
    <>
      <div className="cart_section mt-4">
        <div className="row">
          <div className="col-lg-9 ">
            <div className="cart_container">
              <div className="cart_title mb-4">
                <h5>
                  {' '}
                  Sepetinizde <small> ({state.total})</small> ürün
                  bulunmaktadır.
                </h5>
              </div>

              {state.cart.length > 0 ? (
                state.cart.map((product) => {
                  return <CartItems product={product} key={product.id} />
                })
              ) : (
                <div>Sepetinizde ürün bulunmamaktadır. </div>
              )}

              {state.cart.length && (
                <CartFooter
                  emptyCart={emptyCart}
                  totalCount={state.totalCount}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
