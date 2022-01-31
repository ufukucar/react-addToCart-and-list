import React, { useState, useEffect, useReducer } from 'react'
import Product from './Product'

const Products = ({ countArttir, addToCart }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const products = await fetch('https://fakestoreapi.com/products', {
      method: 'GET',
    })

    const productsJson = await products.json()

    setProducts(productsJson)

    //console.log(productsJson)
  }

  return (
    <>
      <div className="row mt-3">
        <div className="col-lg-12">
          <h1 className="text-center mb-5">Ürünlerimiz </h1>
        </div>
      </div>
      <div className="row">
        {products.length &&
          products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                countArttir={countArttir}
                addToCart={addToCart}
              />
            )
          })}
      </div>
    </>
  )
}

export default Products
