import React from 'react'

const CartItems = ({ product }) => {
  return (
    <div className="cart_items">
      <ul className="cart_list">
        <li className="cart_item clearfix">
          <div className="cart_item_image">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '120px', height: '120px' }}
            />
          </div>
          <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
            <div className="cart_item_name cart_info_col">
              <div className="cart_item_title">Ürün Adı</div>
              <div className="cart_item_text">{product.title}</div>
            </div>

            <div className="cart_item_quantity cart_info_col">
              <div className="cart_item_title">Miktar</div>
              <div className="cart_item_text">{product.quantity}</div>
            </div>
            <div className="cart_item_price cart_info_col">
              <div className="cart_item_title">Fiyat</div>
              <div className="cart_item_text">{product.price} $</div>
            </div>
            <div className="cart_item_total cart_info_col">
              <div className="cart_item_title">Toplam</div>
              <div className="cart_item_text">
                {product.price * product.quantity} $
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CartItems
