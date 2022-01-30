import React, { useReducer } from 'react'
import './App.css'
import Header from './Components/Header'
import Products from './Components/Products'
import { initialState } from './Reducer/initialState'
import { Reducer } from './Reducer/Reducer'
function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)
  const countArttir = () => {
    dispatch({ type: 'TOTALARTTIR' })
  }

  const addToCart = (product) => {
    // console.log('item: ', item)
    let payload = {
      id: product.id,
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

  return (
    <>
      <Header state={state} />
      <div className="container-fluid ">
        <Products countArttir={countArttir} addToCart={addToCart} />
      </div>
    </>
  )
}

export default App
