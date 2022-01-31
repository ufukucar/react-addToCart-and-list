import React, { useReducer } from 'react'

import './App.css'
import Header from './Components/Header'
import Products from './Components/Products'
import { initialState } from './Reducer/initialState'
import { Reducer } from './Reducer/Reducer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart'

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)
  const countArttir = () => {
    dispatch({ type: 'TOTALARTTIR' })
  }

  const addToCart = (product) => {
    // console.log('item: ', item)
    let payload = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: 1,
    }
    dispatch({
      type: 'ADD_TO_CART',
      payload,
    })

    //console.log(state)
  }

  const emptyCart = () => {
    dispatch({ type: 'EMPTY_CART' })
  }

  return (
    <BrowserRouter>
      <Header state={state} />
      <div className="container-fluid ">
        <Routes>
          <Route
            path="/"
            element={
              <Products countArttir={countArttir} addToCart={addToCart} />
            }
          />

          <Route
            path="cart"
            element={<Cart emptyCart={emptyCart} state={state} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
