import React, { useReducer } from 'react'
import { Reducer } from '../Reducer/Reducer'
import { initialState } from '../Reducer/initialState'

const Product = (props) => {
  const { product, countArttir, addToCart } = props

  return (
    <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title.slice(0, 25)}</h5>
          <p className="card-text">{product.description.slice(0, 20)}..</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>{product.price}$</b>
          </li>
          <li className="list-group-item">
            <button
              className="btn btn-primary float-right"
              onClick={(e) => {
                //countArttir()
                addToCart(product)
              }}
            >
              Add to Cart
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Product
